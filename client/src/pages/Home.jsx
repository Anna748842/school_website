import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import schoolBuilding from "../assets/school-building.png";
import schoolVideo from "../assets/school-campus.mp4";
import {
  ArrowRight,
  Calendar,
  User,
  Award,
  MapPin,
  PlayCircle,
  BookOpen,
  Microscope,
  GraduationCap,
  Users,
  Building2,
  Target,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen font-sans text-ink">
      {/* Section 1: Hero */}
      <section className="relative w-full bg-brand overflow-hidden">
        {/* Background gradient/overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/40 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold tracking-wider text-sm mb-4">
              WELCOME TO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Ravi Mahato Smarak High School
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 font-display">
              Mahuda, Dhanbad, Jharkhand
            </p>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Empowering young minds through knowledge, values and holistic
              development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Explore School <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Admissions
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Placeholder */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-2xl border border-white/10">
              <img
                src={schoolBuilding}
                alt="Ravi Mahato Smarak High School"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Stats Bar */}
      <section className="w-full bg-surface py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                icon: Calendar,
                title: "Established 1994",
                desc: "A legacy of excellence",
              },
              { icon: User, title: "Founder", desc: "Jateshwar Mahato" },
              {
                icon: Award,
                title: "Affiliation",
                desc: "Jharkhand Academic Council (JAC)",
              },
              {
                icon: MapPin,
                title: "Location",
                desc: "Mahuda, Dhanbad - 828305",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand shrink-0">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{stat.title}</h3>
                  <p className="text-sm text-muted">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: A Legacy of Learning and Values */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left */}
            <motion.div
              className="flex-1"
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-brand">
                A Legacy of Learning and Values
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-lg">
                Ravi Mahato Smarak High School is a co-educational institution,
                committed to providing quality education and nurturing every
                student's potential. Established in 1994 by Late Jateshwar
                Mahato, the school continues to be a beacon of knowledge,
                discipline and character building in Mahuda and surrounding
                areas.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-brand font-semibold hover:text-accent transition-colors"
              >
                Know More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Right */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-2xl border border-white/10">
                <video
                  src={schoolVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
              <p className="text-center mt-4 text-muted font-medium">
                Watch Our Campus Video
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Academic Divisions */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="max-w-2xl">
              <p className="text-accent font-semibold tracking-wider text-sm mb-3">
                ACADEMICS
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand mb-4">
                Our Academic Divisions
              </h2>
              <p className="text-muted text-lg">
                Complete education from early childhood to higher secondary.
              </p>
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white font-medium rounded-full hover:bg-brand/90 transition-colors shrink-0"
            >
              View Academics <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                title: "Primary Division",
                years: "Nursery - Class V",
                desc: "Build strong foundations",
                icon: BookOpen,
              },
              {
                title: "Secondary Division",
                years: "Class VI - Class X",
                desc: "Explore, Learn, Grow",
                icon: Microscope,
              },
              {
                title: "Intermediate Division",
                years: "Class XI - Class XII",
                desc: "Shape your future",
                icon: GraduationCap,
              },
            ].map((div, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-soft flex items-center justify-center text-brand mb-6">
                  <div.icon className="w-7 h-7" />
                </div>
                <p className="text-accent text-sm font-semibold mb-2">
                  {div.years}
                </p>
                <h3 className="text-2xl font-display font-bold text-ink mb-3">
                  {div.title}
                </h3>
                <p className="text-muted">{div.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Why Choose Us? */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted text-lg">
              We provide the right environment for every child to learn, grow
              and succeed.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { title: "Qualified & Dedicated Faculty", icon: Users },
              { title: "Modern Infrastructure & Facilities", icon: Building2 },
              {
                title: "Holistic Development (Studies + Co-curricular)",
                icon: Target,
              },
              { title: "Safe & Supportive Environment", icon: ShieldCheck },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-ink leading-tight">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: CTA Banner + News */}
      <section className="py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: CTA Box */}
            <motion.div
              className="bg-brand rounded-3xl p-10 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                  Better Education,
                  <br />
                  Brighter Future
                </h2>
                <p className="text-white/80 mb-10 max-w-md text-lg">
                  Join our community and give your child the best foundation for
                  a successful tomorrow.
                </p>
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors self-start"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right: News & Events */}
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-display font-bold text-brand">
                  Latest News & Events
                </h3>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                {[
                  {
                    title: "Karam Festival Celebration",
                    date: "September 2024",
                  },
                  {
                    title: "Matric Examination Achieves Finalized!",
                    date: "August 2024",
                  },
                  {
                    title: "2024 Batch Bihar Jubilee Revision",
                    date: "July 2024",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="mt-1">
                      <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/news"
                className="mt-8 text-brand font-medium hover:text-accent transition-colors flex items-center"
              >
                View All Events <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
