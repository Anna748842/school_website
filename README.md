# Ravi Mahato Smarak High School Website

React/Vite frontend with an Express API and MySQL 8 database.

## Requirements

- Node.js 20 or newer and npm 10 or newer
- MySQL 8 or newer

## Set up MySQL

From the project root, create the database and tables:

```powershell
Get-Content database\schema.sql | mysql -u root -p
```

Optionally load the sample News & Events shown on the website:

```powershell
Get-Content database\seed.sql | mysql -u root -p rms_school
```

The schema creates the `rms_school` database with `admins`, `news`, `events`, and
`contact_messages` tables. The seed script can be run again safely; it will not
overwrite records that already exist.

## Configure and run the API

```powershell
cd server
Copy-Item .env.example .env
npm install
```

Edit `server/.env` with your MySQL connection details. Set `ADMIN_USERNAME`, a
unique `ADMIN_PASSWORD` of at least 12 characters, and a random `JWT_SECRET` of
at least 32 characters. On first startup the API creates that admin account
using a salted password hash; it does not reset existing admin passwords.
Keep these credentials and the `.env` file private.

Start the API:

```powershell
npm run dev
```

The API runs at `http://localhost:5000`. Check its connection to MySQL at
`http://localhost:5000/api/health`.

## Run the frontend

In a second terminal:

```powershell
cd client
npm install
npm run dev
```

Open `http://localhost:5173`. The public News & Events page reads from the API,
the admin can manage news and events after signing in, and the Contact form
saves messages to MySQL.
