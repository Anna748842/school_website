import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import primaryImage from "../assets/primary.png";
import booksImage from "../assets/books.jpg";
import secondaryImage from "../assets/secondary.png";
import intermediateImage from "../assets/secondary.png";
import {
  BookOpen,
  Baby,
  GraduationCap,
  Library,
  FileText,
  Users,
  ChevronRight,
  BookMarked,
  Languages,
  Award,
  ClipboardList,
} from "lucide-react";
import PageHero from "../components/PageHero";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { id: "Overview", label: "Overview", icon: Library },
    { id: "Primary", label: "Primary", icon: Baby },
    { id: "Secondary", label: "Secondary", icon: Users },
    { id: "Intermediate", label: "Intermediate", icon: GraduationCap },
    { id: "Curriculum", label: "Curriculum", icon: BookOpen },
    { id: "Examination", label: "Examination", icon: FileText },
  ];

  return (
    <div className="bg-surface min-h-screen pb-24">
      <PageHero
        label="ACADEMICS"
        title="Our Academics"
        subtitle="Nurturing minds. Building the future."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Academics", path: "/academics" },
        ]}
      />

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-4 flex overflow-x-auto space-x-2 sm:space-x-4 snap-x border border-gray-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 snap-center flex flex-col items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-brand text-white shadow-md"
                    : "bg-white text-muted hover:bg-brand-soft hover:text-brand"
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 space-y-24">
        {/* Academic Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Academic <span className="text-brand">Overview</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              We follow the Jharkhand Academic Council (JAC) curriculum,
              providing a balanced blend of academic excellence, character
              building and holistic development.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-soft rounded-3xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <div className="text-accent mb-6">
                <svg
                  className="w-12 h-12 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-display font-medium text-ink leading-relaxed italic mb-6">
                "Education is not preparation for life; education is life
                itself."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-px bg-accent mr-4"></div>
                <span className="font-semibold text-brand">— John Dewey</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Academic Divisions */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Our Academic <span className="text-brand">Divisions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Division",
                subtitle: "(Nursery - Class V)",
                image: primaryImage,
                points: [
                  "Play-based learning",
                  "Strong foundation",
                  "Skills & learning development",
                ],
              },
              {
                title: "Secondary Division",
                subtitle: "(Class VI - Class X)",
                image: secondaryImage,
                points: [
                  "Concept-based learning",
                  "Co-curricular activities",
                  "Practical assessments",
                ],
              },
              {
                title: "Intermediate Division",
                subtitle: "(Class XI - Class XII)",
                image: intermediateImage,
                points: [
                  "Stream options (Science, Commerce, Arts)",
                  "Career guidance",
                  "Examination preparation",
                ],
              },
            ].map((div, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col group"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-ink mb-1">
                    {div.title}
                  </h3>
                  <p className="text-brand font-medium mb-6">{div.subtitle}</p>
                  <ul className="space-y-3 mb-8 flex-grow text-muted">
                    {div.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-accent shrink-0 mr-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="#"
                    className="inline-flex items-center text-brand font-semibold hover:text-accent transition-colors"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Our Curriculum */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-soft rounded-3xl p-8 sm:p-12 md:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
                Our <span className="text-brand">Curriculum</span>
              </h2>
              <p className="text-muted text-lg mb-8">
                We follow the Jharkhand Academic Council (JAC) curriculum with a
                focus on academic excellence and life skills.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-brand mr-4 shrink-0">
                    <Languages className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">
                      Languages
                    </h4>
                    <p className="text-muted">Hindi, English, Sanskrit</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-brand mr-4 shrink-0">
                    <BookMarked className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">
                      Core Subjects
                    </h4>
                    <p className="text-muted">
                      Mathematics, Science, Social Science
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-brand mr-4 shrink-0">
                    <Library className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">
                      Optional Subjects
                    </h4>
                    <p className="text-muted">As per JAC guidelines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={booksImage}
                alt="Books representing academic learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Examination & Evaluation */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Examination & <span className="text-brand">Evaluation</span>
            </h2>
            <p className="text-muted text-lg">
              Regular assessments, terminal tests and board examinations help
              track progress and build confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Periodic Tests", icon: FileText },
              { label: "Half Yearly Exams", icon: ClipboardList },
              { label: "Annual Exams", icon: BookOpen },
              { label: "Result & Progress Reports", icon: Award },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-brand-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-ink">{item.label}</h4>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-8 leading-tight">
              We are committed to providing the best learning experience and
              preparing our students for a brighter future.
            </h2>
            <Link
              to="/admissions"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Admission Enquiry
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
