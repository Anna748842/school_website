import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import classroomsImage from "../assets/classrooms.webp";
import libraryImage from "../assets/library.jpg";
import playgroundImage from "../assets/playground.png";
import computerLabImage from "../assets/computer-lab.jpg";
import scienceLabImage from "../assets/science-lab.jpg";
import schoolBuilding from "../assets/school-building.png";
import hostelImage from "../assets/hostel.png";
import independenceDayImage from "../assets/independence-day.jpg";
import republicDayImage from "../assets/independence-day.jpg";
import karamFestivalImage from "../assets/karma.jpg";
import annualFunctionImage from "../assets/annual-day.jpg";
import cricketImage from "../assets/cricket.jpg";
import footballImage from "../assets/football.jpg";
import athleticsImage from "../assets/athletics.jpg";
import khokhoImage from "../assets/kho-kho.jpg";
import workshopImage from "../assets/workshop.webp";
import examHallImage from "../assets/exam-hall.jpg";
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Campus",
    "Events",
    "Sports",
    "Cultural",
    "Academic",
    "Celebrations",
  ];

  const sections = [
    {
      id: "campus",
      title: "Campus Life",
      description:
        "Our beautiful campus, modern facilities and green surroundings.",
      link: "#",
      items: [
        {
          id: 1,
          title: "School Building",
          category: "Campus",
          image: schoolBuilding,
        },
        {
          id: 2,
          title: "Classroom",
          category: "Campus",
          image: classroomsImage,
        },
        {
          id: 3,
          title: "Library",
          category: "Academic",
          image: libraryImage,
        },
        {
          id: 4,
          title: "Playground",
          category: "Sports",
          image: playgroundImage,
        },
        {
          id: 5,
          title: "Hostel",
          category: "Campus",
          image: hostelImage,
        },
      ],
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description:
        "From cultural programs to national celebrations, every event builds memories.",
      link: "#",
      items: [
        {
          id: 6,
          title: "Independence Day",
          category: "Celebrations",
          image: independenceDayImage,
        },
        {
          id: 7,
          title: "Republic Day",
          category: "Celebrations",
          image: republicDayImage,
        },
        {
          id: 8,
          title: "Karam Festival",
          category: "Cultural",
          image: karamFestivalImage,
        },
        {
          id: 9,
          title: "Annual Function",
          category: "Events",
          image: annualFunctionImage,
        },
      ],
    },
    {
      id: "sports",
      title: "Sports",
      description: "Sports build discipline, teamwork and a healthy mind.",
      link: "#",
      items: [
        {
          id: 10,
          title: "Cricket",
          category: "Sports",
          image: cricketImage,
        },
        {
          id: 11,
          title: "Football",
          category: "Sports",
          image: footballImage,
        },
        {
          id: 12,
          title: "Athletics",
          category: "Sports",
          image: athleticsImage,
        },
        {
          id: 13,
          title: "Kho Kho",
          category: "Sports",
          image: khokhoImage,
        },
      ],
    },
    {
      id: "academic",
      title: "Academic Activities",
      description:
        "Learning beyond textbooks — seminars, workshops and robotic sessions.",
      link: "#",
      items: [
        {
          id: 14,
          title: "Science Lab",
          category: "Academic",
          image: scienceLabImage,
        },
        {
          id: 15,
          title: "Computer Lab",
          category: "Academic",
          image: computerLabImage,
        },
        {
          id: 16,
          title: "Workshop",
          category: "Academic",
          image: workshopImage,
        },
        {
          id: 17,
          title: "Exam Hall",
          category: "Academic",
          image: examHallImage,
        },
      ],
    },
  ];

  const allItems = sections.flatMap((section) => section.items);
  const filteredItems =
    activeTab === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        label="OUR GALLERY"
        title="Moments That Inspire Us"
        subtitle="Explore our campus, events, activities and the vibrant life at Ravi Mahato Smarak High School."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Gallery", path: "/gallery" },
        ]}
        decorativeText="Together We Grow"
      />

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-brand text-white"
                  : "bg-white text-muted hover:bg-brand-soft hover:text-brand border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {activeTab === "All" ? (
          <div className="space-y-20">
            {sections.map((section, sectionIdx) => (
              <div key={section.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-display font-bold text-ink mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted text-lg">{section.description}</p>
                  </div>
                  <a
                    href={section.link}
                    className="inline-flex items-center text-accent font-semibold hover:text-brand transition-colors whitespace-nowrap"
                  >
                    View All <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${section.items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-6`}
                >
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 relative bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 pointer-events-none">
                          <ImageIcon className="text-white w-10 h-10" />
                        </div>
                      </div>
                      <h3 className="text-ink font-semibold text-center group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 relative bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 pointer-events-none">
                    <ImageIcon className="text-white w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-ink font-semibold text-center group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted text-center mt-1 uppercase tracking-wider">
                  {item.category}
                </p>
              </motion.div>
            ))}

            {filteredItems.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-ink mb-2">
                  No photos found
                </h3>
                <p className="text-muted">
                  There are no photos in this category yet.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#1e4a7a] to-brand z-0" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-soft/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Building Memories, Creating Futures
            </h2>
            <p className="text-xl text-brand-soft/90 mb-10 max-w-2xl mx-auto font-sans">
              Be a part of our journey — explore, learn, grow.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand bg-white rounded-full hover:bg-brand-soft transition-colors shadow-lg hover:shadow-xl"
            >
              Join Our School <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
