import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageHero from '../components/PageHero';

const tabs = ['Teaching Staff', 'Non-Teaching Staff', 'Administration'];

const teachingStaff = [
  { id: 1, name: 'Mr. Rajesh Kumar', role: 'Principal', qualifications: 'M.Sc., B.Ed.' },
  { id: 2, name: 'Mrs. Sunita Verma', role: 'Vice Principal', qualifications: 'M.A., B.Ed.' },
  { id: 3, name: 'Mr. Anil Tiwari', role: 'Mathematics', qualifications: 'M.Sc., B.Ed.' },
  { id: 4, name: 'Mrs. Pooja Sharma', role: 'English', qualifications: 'M.A., B.Ed.' },
  { id: 5, name: 'Mr. Sandeep Singh', role: 'Science', qualifications: 'M.Sc., B.Ed.' },
  { id: 6, name: 'Mrs. Kavita Das', role: 'Hindi', qualifications: 'M.A., B.Ed.' },
  { id: 7, name: 'Mr. Vivek Patel', role: 'Social Science', qualifications: 'M.A., B.Ed.' },
  { id: 8, name: 'Mrs. Neha Gupta', role: 'Computer Science', qualifications: 'MCA, B.Ed.' },
];

const nonTeachingStaff = [
  { id: 1, name: 'Mr. Ram Singh', role: 'Office Superintendent', qualifications: 'B.Com' },
  { id: 2, name: 'Mrs. Meera Kumar', role: 'Librarian', qualifications: 'M.Lib' },
  { id: 3, name: 'Mr. Shyam Patel', role: 'Lab Assistant', qualifications: 'B.Sc.' },
  { id: 4, name: 'Ms. Priya Singh', role: 'Receptionist', qualifications: 'B.A.' },
];

const administration = [
  { id: 1, name: 'Mr. Amit Shah', role: 'Chairman', qualifications: 'Managing Committee' },
  { id: 2, name: 'Mrs. Lata Mangeshkar', role: 'Secretary', qualifications: 'Managing Committee' },
];

export default function Faculty() {
  const [activeTab, setActiveTab] = useState('Teaching Staff');
  const [searchQuery, setSearchQuery] = useState('');

  const getActiveStaff = () => {
    switch (activeTab) {
      case 'Teaching Staff': return teachingStaff;
      case 'Non-Teaching Staff': return nonTeachingStaff;
      case 'Administration': return administration;
      default: return teachingStaff;
    }
  };

  const filteredStaff = getActiveStaff().filter(staff => 
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    staff.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        label="Our Team"
        title="Faculty & Staff"
        subtitle="Dedicated educators. Guiding every step."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Faculty & Staff', path: '/faculty' }
        ]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-white text-muted border border-gray-200 hover:border-brand/30 hover:bg-brand-soft'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand mb-4">
              Our {activeTab}
            </h2>
            {activeTab === 'Teaching Staff' && (
              <p className="text-muted max-w-2xl text-lg">
                Experienced and passionate teachers who inspire, guide and empower our students.
              </p>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-80 relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted" />
            </div>
            <input
              type="text"
              placeholder="Search by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent bg-white shadow-sm"
            />
          </motion.div>
        </div>

        {/* Grid */}
        {filteredStaff.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredStaff.map((staff, index) => (
              <motion.article
                key={staff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-soft to-gray-100 relative overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#163b65_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Initial avatar placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl font-display font-bold text-brand/30">
                      {staff.name.split(' ').slice(0,2).map(n => n[0]).join('').replace('.', '')}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-brand transition-colors">
                    {staff.name}
                  </h3>
                  <p className="text-brand font-medium text-sm mb-3">
                    {staff.role}
                  </p>
                  <div className="inline-block px-3 py-1.5 bg-surface rounded-full text-xs text-muted font-medium border border-gray-100">
                    {staff.qualifications}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 text-muted bg-white rounded-3xl border border-gray-100 shadow-sm">
            <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-xl font-medium text-ink">No staff members found.</p>
            <p className="mt-1 text-sm">Try adjusting your search criteria.</p>
          </div>
        )}
      </section>
    </main>
  );
}
