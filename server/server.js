import 'dotenv/config';

import { randomBytes, scrypt, timingSafeEqual } from 'crypto';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);
const app = express();

const port = Number(process.env.SERVER_PORT) || 5000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const jwtSecret = process.env.JWT_SECRET;

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'rms_school',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
});

app.disable('x-powered-by');
app.use(cors({ origin: clientOrigin }));
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  jwt.verify(token, jwtSecret, (error, decoded) => {
    if (error) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
    if (!decoded || typeof decoded !== 'object' || decoded.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }
    req.user = decoded;
    next();
  });
};

const textField = (body, field, maxLength) => {
  const value = body?.[field];
  if (typeof value !== 'string' || !value.trim() || value.trim().length > maxLength) {
    return null;
  }
  return value.trim();
};

const getNews = async () => {
  const [rows] = await pool.execute(
    'SELECT id, title, date, category, description FROM news ORDER BY created_at DESC, id DESC',
  );
  return rows;
};

const getEvents = async () => {
  const [rows] = await pool.execute(
    'SELECT id, date, title, location FROM events ORDER BY id ASC',
  );
  return rows;
};

app.post('/api/login', async (req, res) => {
  const username = textField(req.body, 'username', 100);
  const password = req.body?.password;
  if (!username || typeof password !== 'string' || !password || password.length > 1024) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  const [rows] = await pool.execute(
    'SELECT id, username, password_hash FROM admins WHERE username = ? LIMIT 1',
    [username],
  );
  const admin = rows[0];
  if (!admin) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const [salt, storedHash] = admin.password_hash.split(':');
  if (!salt || !storedHash || !/^[a-f0-9]+$/i.test(salt) || !/^[a-f0-9]+$/i.test(storedHash)) {
    throw new Error('Stored administrator password hash is invalid');
  }

  const suppliedHash = await scryptAsync(password, salt, Buffer.from(storedHash, 'hex').length);
  if (!timingSafeEqual(suppliedHash, Buffer.from(storedHash, 'hex'))) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const token = jwt.sign({ role: 'admin', sub: String(admin.id) }, jwtSecret, { expiresIn: '1h' });
  return res.json({ success: true, token });
});

app.get('/api/news', async (_req, res) => {
  res.json(await getNews());
});

app.post('/api/news', authMiddleware, async (req, res) => {
  const title = textField(req.body, 'title', 200);
  const date = textField(req.body, 'date', 100);
  const category = textField(req.body, 'category', 100);
  const description = textField(req.body, 'description', 10000);
  if (!title || !date || !category || !description) {
    return res.status(400).json({
      success: false,
      message: 'Title, date, category, and description are required and must be within their length limits',
    });
  }

  await pool.execute(
    'INSERT INTO news (title, date, category, description) VALUES (?, ?, ?, ?)',
    [title, date, category, description],
  );
  return res.status(201).json({ success: true, news: await getNews() });
});

app.delete('/api/news/:id', authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({ success: false, message: 'Invalid news item ID' });
  }

  await pool.execute('DELETE FROM news WHERE id = ?', [id]);
  return res.json({ success: true, news: await getNews() });
});

app.get('/api/events', async (_req, res) => {
  res.json(await getEvents());
});

app.post('/api/events', authMiddleware, async (req, res) => {
  const date = textField(req.body, 'date', 100);
  const title = textField(req.body, 'title', 200);
  const location = textField(req.body, 'location', 200);
  if (!date || !title || !location) {
    return res.status(400).json({
      success: false,
      message: 'Date, title, and location are required and must be within their length limits',
    });
  }

  await pool.execute('INSERT INTO events (date, title, location) VALUES (?, ?, ?)', [
    date,
    title,
    location,
  ]);
  return res.status(201).json({ success: true, events: await getEvents() });
});

app.delete('/api/events/:id', authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({ success: false, message: 'Invalid event ID' });
  }

  await pool.execute('DELETE FROM events WHERE id = ?', [id]);
  return res.json({ success: true, events: await getEvents() });
});

app.post('/api/contact', async (req, res) => {
  const name = textField(req.body, 'name', 150);
  const email = textField(req.body, 'email', 254);
  const phone = textField(req.body, 'phone', 40);
  const subject = textField(req.body, 'subject', 100);
  const message = textField(req.body, 'message', 10000);
  if (
    !name ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !phone ||
    !subject ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      message: 'Please provide valid contact details and a message within the length limits',
    });
  }

  await pool.execute(
    'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
    [name, email, phone, subject, message],
  );
  return res.status(201).json({ success: true, message: 'Your message has been received.' });
});

app.get('/api/health', async (_req, res) => {
  await pool.execute('SELECT 1');
  res.status(200).json({ success: true, message: 'API and database are running.' });
});

app.use((error, _req, res, _next) => {
  console.error('API request failed:', error);
  const status = Number.isInteger(error.status) && error.status >= 400 && error.status < 500
    ? error.status
    : 500;
  res.status(status).json({
    success: false,
    message: status === 500 ? 'Internal server error' : error.message,
  });
});

const initializeAdmin = async () => {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) {
    throw new Error('Set ADMIN_USERNAME and ADMIN_PASSWORD in the server environment');
  }
  if (username.length > 100 || password.length < 12 || password.length > 1024) {
    throw new Error('ADMIN_USERNAME must be at most 100 characters and ADMIN_PASSWORD 12-1024 characters');
  }

  const [existingAdmins] = await pool.execute(
    'SELECT id FROM admins WHERE username = ? LIMIT 1',
    [username],
  );
  if (existingAdmins.length > 0) return;

  const salt = randomBytes(16).toString('hex');
  const passwordHash = await scryptAsync(password, salt, 64);
  await pool.execute(
    'INSERT IGNORE INTO admins (username, password_hash) VALUES (?, ?)',
    [username, `${salt}:${passwordHash.toString('hex')}`],
  );
};

const startServer = async () => {
  if (!jwtSecret || jwtSecret.length < 32) {
    throw new Error('Set JWT_SECRET to a random value of at least 32 characters in the server environment');
  }

  await pool.execute('SELECT 1');
  await initializeAdmin();
  app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
  });
};

startServer().catch(async (error) => {
  console.error('Failed to start API server:', error);
  await pool.end();
  process.exitCode = 1;
});
