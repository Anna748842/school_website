import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, GraduationCap } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Alumni() {
  const stats = [
    { icon: Users, value: '500+', label: 'Alumni Network' },
    { icon: BookOpen, value: '25+', label: 'Years of Legacy' },
    { icon: Trophy, value: '100+', label: 'Success Stories' },
    { icon: GraduationCap, value: '50+', label: 'Batch Groups' },
  ];

  const alumni = [
    {
      name: 'Amit Kumar',
      designation: 'Software Engineer, Google',
      quote: "School gave me the foundation to dream big and pursue more.",
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Priya Singh',
      designation: 'IAS Officer, Tata Dahlia Foundation',
      quote: "The values and discipline I learned have guided me at every step.",
      color: 'from-pink-400 to-rose-500'
    },
    {
      name: 'Rohit Gupta',
      designation: 'Entrepreneur, AOL New Delhi',
      quote: "The support of my teachers and friends made me who I am today.",
      color: 'from-emerald-400 to-teal-500'
    },
    {
      name: 'Sneha Kumari',
      designation: 'AIIMS, New Delhi',
      quote: "RMHS equipped me with knowledge and the courage to serve society.",
      color: 'from-purple-400 to-fuchsia-500'
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        label="Our Alumni"
        title="Alumni"
        subtitle="Once a RMHS student, always a part of our family."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Alumni', path: '/alumni' }
        ]}
        decorativeText="Together We Grow"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-soft flex items-center justify-center text-brand">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-ink">{stat.value}</div>
                    <div className="text-muted font-medium mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Alumni Network Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">
                  Our Alumni Network
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  Ravi Mahato Smarak High School takes pride in its alumni, who are making a difference in various fields across the world. Join our growing network and stay connected with your alma mater.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand/90 transition-colors">
                  Register as Alumni
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors">
                  View Alumni Directory
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-brand/20 to-brand/40">
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent flex items-center justify-center">
                  <span className="text-white/50 font-display text-lg">Alumni Network Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 font-display italic text-4xl text-accent opacity-80">
                Together We Grow
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
              Alumni Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni.map((person, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-24 h-24 rounded-full shadow-inner bg-gradient-to-br ${person.color} flex items-center justify-center text-white/50 text-xs`} />
                  <div>
                    <h3 className="text-xl font-bold font-display text-ink">{person.name}</h3>
                    <p className="text-sm font-medium text-brand mt-1">{person.designation}</p>
                  </div>
                  <p className="text-muted italic relative mt-4">
                    "{person.quote}"
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
