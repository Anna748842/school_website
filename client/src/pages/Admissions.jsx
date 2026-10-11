import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, FileCheck, CreditCard, ClipboardCheck, CheckCircle2, ChevronRight, CheckCircle, Info, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';

const Tabs = ['Admission Process', 'Eligibility', 'Required Documents', 'Important Dates', 'Enquiry'];

const admissionSteps = [
  {
    icon: FileText,
    title: 'Fill the Application Form',
    description: 'Download or collect the form from the school office/website',
  },
  {
    icon: FileCheck,
    title: 'Submit Required Documents',
    description: 'Attach all necessary documents as mentioned',
  },
  {
    icon: CreditCard,
    title: 'Pay the Admission Fee',
    description: 'Complete the fee payment as per the guidelines',
  },
  {
    icon: ClipboardCheck,
    title: 'Document Verification',
    description: 'Our team will verify all submitted documents',
  },
  {
    icon: CheckCircle2,
    title: 'Confirmation',
    description: 'Receive the confirmation and further instructions from the school',
  },
];

const eligibilityCriteria = [
  { class: 'Nursery', eligibility: 'Age 3+ years (as on 31st March)' },
  { class: 'LKG', eligibility: 'Age 4+ years (as on 31st March)' },
  { class: 'UKG', eligibility: 'Age 5+ years (as on 31st March)' },
  { class: 'Class I - X', eligibility: 'As per JAC norms' },
  { class: 'Class XI - XII', eligibility: 'As per JAC norms' },
];

const requiredDocuments = [
  'Birth Certificate (Original & Copy)',
  'Previous Class Marksheet (if applicable)',
  'Residence Proof',
  'Passport Size Photographs (4 Nos.)',
  'Caste Certificate (if applicable)',
  'Aadhar Card (Student & Parent)',
];

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('Admission Process');

  return (
    <div className="bg-surface min-h-screen">
      <PageHero 
        label="Admissions"
        title="Admissions"
        subtitle="Your Child's Bright Future Begins Here"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Admissions', path: '/admissions' }
        ]}
        decorativeText="Learn Today, Lead Tomorrow"
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {Tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-white text-muted hover:bg-brand-soft hover:text-brand shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'Admission Process' && (
              <div className="space-y-16">
                
                {/* Admission Steps */}
                <div>
                  <h2 className="text-3xl font-display font-bold text-ink mb-8 text-center">Admission Process</h2>
                  <p className="text-muted text-center max-w-2xl mx-auto mb-12">Simple Steps to Enrol Your Child</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {admissionSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center relative"
                        >
                          <div className="w-14 h-14 bg-brand-soft rounded-full flex items-center justify-center text-brand mb-4">
                            <Icon className="w-7 h-7" />
                          </div>
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                            {index + 1}
                          </div>
                          <h3 className="font-display font-semibold text-ink mb-2">{step.title}</h3>
                          <p className="text-sm text-muted">{step.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Eligibility */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-display font-bold text-ink mb-6">Eligibility Criteria</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-brand-soft text-brand font-medium">
                            <th className="p-4 border-b border-slate-200">Class</th>
                            <th className="p-4 border-b border-slate-200">Eligibility</th>
                          </tr>
                        </thead>
                        <tbody>
                          {eligibilityCriteria.map((item, index) => (
                            <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                              <td className="p-4 text-ink font-medium">{item.class}</td>
                              <td className="p-4 text-muted">{item.eligibility}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>

                  {/* Required Documents */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-display font-bold text-ink mb-6">Required Documents</h3>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full">
                      <ul className="space-y-4">
                        {requiredDocuments.map((doc, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Important Dates Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full shrink-0">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-ink mb-2">Important Dates</h3>
                      <p className="text-muted mb-0">Exact dates will be updated soon.</p>
                    </div>
                  </div>
                  <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-colors shrink-0 whitespace-nowrap">
                    View Full Admission Circular
                  </button>
                </motion.div>

              </div>
            )}

            {activeTab !== 'Admission Process' && (
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 text-center min-h-[400px] flex flex-col items-center justify-center">
                <Info className="w-16 h-16 text-brand-soft mb-6" />
                <h2 className="text-2xl font-display font-bold text-ink mb-4">{activeTab}</h2>
                <p className="text-muted max-w-lg mx-auto">
                  Detailed information regarding {activeTab.toLowerCase()} will be updated shortly. Please check back later or contact the admission office for urgent queries.
                </p>
                {activeTab === 'Enquiry' && (
                  <button className="mt-8 bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand/90 transition-colors">
                    Contact Admission Office
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
