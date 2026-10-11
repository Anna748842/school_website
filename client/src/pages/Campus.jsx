import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  BookOpen,
  FlaskConical,
  Trees,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import classroomImage from "../assets/classrooms.webp";
import libraryImage from "../assets/library.jpg";
import scienceLabImage from "../assets/science-lab.jpg";
import computerLabImage from "../assets/computer-lab.jpg";
import playgroundImage from "../assets/playground.png";
import canteenImage from "../assets/canteen.webp";
import drinkingWaterImage from "../assets/drinking-water.jpg";
import sanitaryImage from "../assets/sanitary-facilities.jpg";

export default function Campus() {
  const quickStats = [
    {
      icon: Monitor,
      title: "Modern Classrooms",
      desc: "Well equipped & spacious",
    },
    {
      icon: BookOpen,
      title: "Library",
      desc: "Knowledge for a brighter future",
    },
    { icon: FlaskConical, title: "Laboratories", desc: "Hands-on learning" },
    { icon: Trees, title: "Playground", desc: "Sports for a healthy mind" },
  ];

  const facilities = [
    {
      title: "Classrooms",
      desc: "Smart classrooms with modern amenities",
      image: classroomImage,
    },
    {
      title: "Library",
      desc: "A rich collection of books and digital resources",
      image: libraryImage,
    },
    {
      title: "Science Labs",
      desc: "Well-equipped labs for practical learning",
      image: scienceLabImage,
    },
    {
      title: "Computer Lab",
      desc: "Technology for a digital future",
      image: computerLabImage,
    },
    {
      title: "Playground",
      desc: "Sports ground for physical fitness",
      image: playgroundImage,
    },
    {
      title: "Canteen",
      desc: "Healthy and hygienic food",
      image: canteenImage,
    },
    {
      title: "Drinking Water",
      desc: "Clean and safe drinking water",
      image: drinkingWaterImage,
    },
    {
      title: "Sanitary Facilities",
      desc: "Clean and hygienic facilities",
      image: sanitaryImage,
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        label="Our Campus"
        title="Campus & Facilities"
        subtitle="Modern infrastructure, safe environment and holistic facilities for a better learning experience."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Campus & Facilities", path: "/campus" },
        ]}
      />

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand">
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-ink">
                    {stat.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-display font-bold text-ink"
              >
                Our Facilities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-muted"
              >
                We provide a range of facilities to ensure the overall
                development of every student, academically, physically and
                socially.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button className="inline-flex items-center px-6 py-3 border-2 border-brand text-brand font-medium rounded-full hover:bg-brand hover:text-white transition-colors duration-300">
                View All Facilities
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-ink mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Building Memories, Creating Futures
              </h2>
              <p className="text-lg md:text-xl text-brand-soft/90 mb-10">
                Be a part of our journey — explore, learn, grow.
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center px-8 py-4 bg-white text-brand rounded-full font-medium text-lg hover:bg-brand-soft transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our School
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
