import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('Academic');
  const tabs = ['Academic', 'Sports', 'Cultural', 'Co-curricular', 'Others'];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="bg-surface min-h-screen">
      <PageHero 
        label="Our Pride"
        title="Student Achievements"
        subtitle="Hard work, dedication and talent — our students make us proud."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Student Achievements', path: '/achievements' }
        ]}
        decorativeText="Small Steps, Big Dreams"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Section Header */}
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center px-4 py-2 bg-brand-soft rounded-full text-brand font-medium text-sm mb-4">
                <Trophy className="w-4 h-4 mr-2" /> {activeTab} Achievements
              </div>
              <h2 className="text-3xl font-display font-bold text-ink mb-4">{activeTab} Excellence</h2>
              <p className="text-muted text-lg max-w-2xl">
                Our students consistently excel in board exams, competitive exams and academic competitions, bringing laurels to the institution.
              </p>
            </motion.div>

            {/* Large Stat Card */}
            <motion.div 
              {...fadeUp}
              className="bg-gradient-to-br from-brand to-[#0c2442] rounded-3xl p-10 text-white shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Medal className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-6">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">100%</h3>
                <p className="text-xl text-white/90 font-medium">Pass Percentage in Recent Board Exams</p>
                <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-accent">56</div>
                    <div className="text-sm text-white/70 mt-1">90%+ Scorers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-sm text-white/70 mt-1">Perfect 100s</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Achievements List */}
            <motion.div 
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-ink mb-8">Highlights (2024-25)</h3>
              <ul className="space-y-6">
                {[
                  '56 students secured 90%+ in Matric Examination (2025)',
                  '2 students qualified for JEE Main (2024)',
                  '3 students selected in National Science Olympiad (2024)',
                  '1 student won State-Level Essay Competition (2024)',
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink">{item}</h4>
                      <p className="text-sm text-muted mt-1">Academic Year 2024-25</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Sidebar Gallery */}
          <div className="lg:w-1/3">
            <motion.div 
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-8"
            >
              <h3 className="text-xl font-display font-bold text-ink mb-6 flex items-center">
                <Star className="w-5 h-5 text-accent mr-2" /> Gallery Highlights
              </h3>
              
              <div className="space-y-6 mb-8">
                {[
                  'Matric Achievers Felicitation 2024',
                  'Sports Day Winners 2024',
                  'Cultural Fest Performance 2024'
                ].map((title, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="w-full h-32 bg-gradient-to-br from-brand/80 to-brand rounded-2xl mb-3 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                      {/* Gradient placeholder */}
                    </div>
                    <h4 className="text-sm font-semibold text-ink group-hover:text-brand transition-colors line-clamp-2">
                      {title}
                    </h4>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 border border-slate-200 rounded-xl text-ink font-medium hover:bg-surface hover:text-brand hover:border-brand transition-all flex items-center justify-center group">
                View All Achievements <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
