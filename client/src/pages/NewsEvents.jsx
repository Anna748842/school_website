import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('Latest News');
  const tabs = ['Latest News', 'Upcoming Events', 'Achievements', 'All'];

  const [newsItems, setNewsItems] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => {
        const newsFormatted = data.map(n => ({
          ...n,
          desc: n.description,
          tag: n.category
        }));
        setNewsItems(newsFormatted);
      });

    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        const eventsFormatted = data.map(ev => {
          const parts = ev.date.split(' ');
          return {
            id: ev.id,
            day: parts[0] || '',
            month: parts[1] || '',
            title: ev.title,
            location: ev.location
          };
        });
        setUpcomingEvents(eventsFormatted);
      });
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="bg-surface min-h-screen">
      <PageHero 
        label="Know Our Events"
        title="News & Events"
        subtitle="Stay updated with the latest happenings at our school."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'News & Events', path: '/news-events' }
        ]}
        decorativeText="Every Day a Better Tomorrow"
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <motion.div 
          {...fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-brand text-white shadow-md' 
                  : 'bg-white text-muted hover:bg-brand-soft hover:text-brand shadow-sm border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Latest News Section */}
        <div className="mb-20">
          <motion.div {...fadeUp} className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-display font-bold text-ink">Latest News</h2>
            <Link to="#" className="text-brand font-medium hover:text-accent transition-colors flex items-center group">
              View All News <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsItems.map((item, index) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-slate-100"
              >
                <div className="h-48 w-full bg-gradient-to-br from-brand/80 to-brand flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                  <Calendar className="w-12 h-12 text-white/50" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-xs font-medium">
                    <span className="flex items-center text-muted">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {item.date}
                    </span>
                    <span className="px-2.5 py-1 bg-brand-soft text-brand rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <Link to="#" className="inline-flex items-center text-brand font-medium text-sm group/link mt-auto">
                    Read More <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <motion.div {...fadeUp} className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-display font-bold text-ink">Upcoming Events</h2>
            <Link to="#" className="text-brand font-medium hover:text-accent transition-colors flex items-center group">
              View All Events <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 hover:bg-surface rounded-2xl transition-colors"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-soft flex flex-col items-center justify-center text-brand border border-brand/10">
                    <span className="text-2xl font-bold">{event.day}</span>
                    <span className="text-sm font-medium uppercase tracking-wider">{event.month}</span>
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-display font-bold text-ink mb-2">{event.title}</h3>
                    <p className="text-muted flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {event.location}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <button className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors">
                      Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 mt-12 bg-gradient-to-br from-[#0c2442] to-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            {...fadeUp}
            className="text-4xl font-display font-bold text-white mb-8"
          >
            Together we learn, together we grow.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand bg-white rounded-full hover:bg-surface transition-colors shadow-lg shadow-black/10">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
