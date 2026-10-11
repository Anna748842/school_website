import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, LogOut } from 'lucide-react';
import { apiUrl } from '../api';

export default function AdminDashboard() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchNews();
  }, [navigate]);

  const fetchNews = async () => {
    try {
      const response = await fetch(apiUrl('/api/news'));
      const data = await response.json();
      setNews(data);
    } catch (err) {
      console.error('Failed to fetch news', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNews = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(apiUrl('/api/news'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, date, category, description })
      });
      const data = await response.json();
      if (data.success) {
        setNews(data.news);
        setTitle('');
        setDate('');
        setCategory('');
        setDescription('');
      }
    } catch (err) {
      console.error('Failed to add news', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(apiUrl(`/api/news/${id}`), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setNews(data.news);
      }
    } catch (err) {
      console.error('Failed to delete news', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 bg-brand text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold font-display">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Add News & Events</h2>
          <form onSubmit={handleAddNews} className="space-y-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
              />
              <input
                type="text"
                placeholder="Date (e.g. 10 Sep 2026)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
              />
              <input
                type="text"
                placeholder="Category (e.g. Event, Notice)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
              />
              <input
                type="text"
                placeholder="Short Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
              />
            </div>
            <button 
              type="submit"
              className="flex items-center gap-2 bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </form>

          <h2 className="text-xl font-bold mb-4">Manage News & Events</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="space-y-3">
              {news.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50">
                  <div>
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    <p className="text-sm text-muted">{item.date} • {item.category}</p>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {news.length === 0 && <p className="text-muted">No news items found.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
