import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ChevronRight, Mail, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Circulars', 'Examination', 'Holidays', 'General', 'Results'];

  const notices = [
    { id: 1, category: 'Examination', title: 'Annual Examination Schedule 2025-26', date: '12 Oct 2026', type: 'exam' },
    { id: 2, category: 'Examination', title: 'Revised School Timing Notice', date: '08 Oct 2026', type: 'exam' },
    { id: 3, category: 'Holidays', title: 'Diwali Holiday Notice', date: '01 Oct 2026', type: 'holiday' },
    { id: 4, category: 'General', title: 'School Uniform Guidelines', date: '28 Sep 2026', type: 'general' },
    { id: 5, category: 'Results', title: 'Class X Board Result 2025', date: '01 Jun 2026', type: 'result' },
  ];

  const quickLinks = ['Circulars', 'Examination', 'Holidays', 'General Notices', 'Results'];

  const getCategoryColor = (type) => {
    switch(type) {
      case 'exam': return 'bg-red-50 text-red-600 border-red-100';
      case 'holiday': return 'bg-green-50 text-green-600 border-green-100';
      case 'general': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'result': return 'bg-purple-50 text-purple-600 border-purple-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="bg-surface min-h-screen">
      <PageHero 
        label="Notice Board"
        title="Notice Board"
        subtitle="Stay informed with the latest updates and announcements."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Notice Board', path: '/notice-board' }
        ]}
        decorativeText="Stay Updated, Stay Ahead"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column (70%) */}
          <div className="lg:w-[70%]">
            {/* Filter Tabs */}
            <motion.div 
              {...fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab 
                      ? 'bg-brand text-white shadow-sm' 
                      : 'bg-white text-muted hover:bg-brand-soft hover:text-brand shadow-sm border border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Notices List */}
            <motion.div 
              {...fadeUp}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="min-w-full">
                <div className="bg-slate-50/80 border-b border-slate-200 px-6 py-4 grid grid-cols-12 gap-4 text-sm font-medium text-muted uppercase tracking-wider">
                  <div className="col-span-3">Category</div>
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2 text-right">Action</div>
                </div>
                
                <div className="divide-y divide-slate-100">
                  {notices.map((notice) => (
                    <div key={notice.id} className="px-6 py-5 grid grid-cols-12 gap-4 items-center hover:bg-surface transition-colors">
                      <div className="col-span-12 sm:col-span-3 mb-2 sm:mb-0">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getCategoryColor(notice.type)}`}>
                          <FileText className="w-3 h-3 mr-1.5" />
                          {notice.category}
                        </span>
                      </div>
                      <div className="col-span-12 sm:col-span-5 mb-2 sm:mb-0">
                        <h4 className="text-sm font-semibold text-ink leading-snug">{notice.title}</h4>
                      </div>
                      <div className="col-span-12 sm:col-span-2 text-sm text-muted">
                        {notice.date}
                      </div>
                      <div className="col-span-12 sm:col-span-2 sm:text-right">
                        <button className="inline-flex items-center justify-center p-2 rounded-xl text-brand hover:bg-brand-soft transition-colors group" title="Download">
                          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pagination Placeholder */}
            <div className="mt-8 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-brand text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-muted hover:bg-surface font-medium">2</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-muted hover:bg-surface font-medium">3</button>
            </div>
          </div>

          {/* Sidebar Column (30%) */}
          <div className="lg:w-[30%] space-y-8">
            {/* Quick Links */}
            <motion.div 
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-display font-bold text-ink mb-6 flex items-center">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to="#" className="flex items-center text-muted hover:text-brand group transition-colors">
                      <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center mr-3 group-hover:bg-brand-soft transition-colors">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand" />
                      </div>
                      <span className="font-medium text-sm">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Subscribe Box */}
            <motion.div 
              {...fadeUp}
              className="bg-gradient-to-br from-brand to-[#0c2442] rounded-3xl p-8 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Bell className="w-24 h-24 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-white mb-2">Subscribe for Updates</h3>
                <p className="text-brand-soft text-sm mb-6 opacity-90">
                  Get notice notifications directly in your inbox.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-accent/20">
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
