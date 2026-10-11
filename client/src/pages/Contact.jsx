import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, GraduationCap, Building, ShieldCheck, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { apiUrl } from '../api';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitMessage(result.message || 'Your message has been received.');
    } catch (error) {
      setSubmitError(true);
      setSubmitMessage(error.message || 'Unable to send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '0326-2271013',
      subtext: 'Mon-Sat, 9 AM - 4 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'info@rmschool.in',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Mahuda, P.O. Mahuda, P.S. Mahuda',
      subtext: 'Dhanbad, Jharkhand - 828305'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'Mon-Sat: 9:00 AM - 4:00 PM',
      subtext: 'Sun & Holidays: Closed'
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'Highly Qualified Faculty'
    },
    {
      icon: Building,
      title: 'Modern Infrastructure & Facilities'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Supportive Environment'
    },
    {
      icon: Trophy,
      title: 'Co-curricular & Sports Activities'
    }
  ];

  return (
    <main className="min-h-screen bg-surface">
      <PageHero
        label="CONTACT US"
        title="Get in Touch"
        subtitle="We are here to help. Reach out to us for any queries, admissions, or support."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '/contact' }
        ]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                  <card.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-ink mb-2">{card.title}</h3>
                <p className="text-brand font-medium mb-1">{card.description}</p>
                <p className="text-muted text-sm">{card.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Section: Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Send Us a Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold text-ink mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors bg-white"
                  >
                    <option value="" disabled>Select subject</option>
                    <option value="Admission Enquiry">Admission Enquiry</option>
                    <option value="General Query">General Query</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <p role="status" className={submitError ? 'text-red-600' : 'text-green-700'}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Right: Find Us on Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex-1 flex flex-col">
                <h2 className="text-3xl font-display font-bold text-ink mb-6">Find Us</h2>
                
                {/* Map Placeholder */}
                <div className="flex-1 min-h-[300px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  <div className="z-10 flex flex-col items-center text-muted p-4 text-center">
                    <MapPin size={48} className="mb-4 text-brand" />
                    <p className="font-medium">Map View</p>
                    <p className="text-sm mt-2 max-w-[200px]">Interactive map placeholder</p>
                    <button className="mt-4 text-brand font-medium hover:underline">
                      View larger map
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-ink mb-2">Ravi Mahato Smarak High School</h3>
                  <p className="text-muted mb-6">
                    Mahuda, P.O. Mahuda, P.S. Mahuda,<br />
                    Dhanbad, Jharkhand - 828305
                  </p>
                  
                  <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand text-brand font-medium rounded-full hover:bg-brand-soft transition-colors w-full sm:w-auto">
                    <MapPin size={20} />
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us? Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">Why Choose Us?</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              A supportive environment for academic excellence and holistic development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6"
              >
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center text-brand mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-display font-semibold text-ink">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-brand to-[#0d2a4a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's Build a Brighter Future Together
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join Ravi Mahato Smarak High School and be a part of a legacy of learning, values and success.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
