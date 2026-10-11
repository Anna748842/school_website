import React, { useState } from "react";
import schoolBuilding from "../assets/school-building.png";
import founderImage from "../assets/founder.png";
import principalImage from "../assets/principal.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  GraduationCap,
  Shield,
  HeartHandshake,
  Quote,
  Target,
  Compass,
  Star,
  CheckCircle2,
  BookOpen,
  User,
} from "lucide-react";
import PageHero from "../components/PageHero";

export default function About() {
  const [activeTab, setActiveTab] = useState("history");

  const tabs = [
    { id: "history", label: "History" },
    { id: "vision", label: "Vision & Mission" },
    { id: "founder", label: "Founder" },
    { id: "principal", label: "Principal's Message" },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderHistoryContent = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="space-y-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
              The Journey of Excellence
            </h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">
              Our History
            </h2>
          </div>

          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Ravi Mahato Smarak High School was established in 1994 with the
              vision of providing quality education to every child, irrespective
              of background. The school has grown into a well-respected
              institution in Mahuda, Dhanbad, known for its disciplined
              environment, academic excellence and holistic development of
              students.
            </p>
            <p>
              The school is run by Ravi Mahato Smarak Shiksha Prasar Samitye
              (Puja Samitee), Mahuda and is affiliated with the Jharkhand
              Academic Council (JAC), Ranchi. It continues to serve the
              community by nurturing young minds and building a brighter future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            {[
              { icon: Calendar, label: "Established", value: "1994" },
              { icon: User, label: "Founder", value: "Mr. Jaleshwar Mahato" },
              { icon: MapPin, label: "Location", value: "Mahuda, Dhanbad" },
              { icon: Users, label: "Beneficiaries", value: "1000+ Students" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-brand-soft"
              >
                <div className="w-10 h-10 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="font-bold text-ink text-sm">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative space-y-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl relative group">
            <img
              src={schoolBuilding}
              alt="Ravi Mahato Smarak High School"
              className="w-full h-full object-cover transition-transform duration-500 border-4 border-gray-200 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-display text-xl font-semibold">
                Ravi Mahato Smarak High School
              </p>
              <p className="text-white/80 text-sm mt-1">
                Mahuda, Dhanbad, Jharkhand
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-brand mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Our Milestones
            </h4>
            <div className="space-y-4">
              {[
                { year: "1994", event: "School Established" },
                { year: "2001", event: "JAC Affiliation" },
                { year: "2020", event: "Digital Learning Initiatives" },
                { year: "2026", event: "Continuing Excellence" },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 font-bold text-accent shrink-0">
                    {milestone.year}
                  </div>
                  <div className="relative pl-4 border-l-2 border-brand-soft pb-4 last:pb-0">
                    <div className="absolute w-3 h-3 bg-brand rounded-full -left-[7px] top-1.5"></div>
                    <p className="text-ink font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-ink mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Providing a foundation for lifelong learning and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality Education & Holistic Development",
              icon: GraduationCap,
            },
            { title: "Dedicated & Experienced Faculty", icon: Users },
            { title: "Safe & Supportive Environment", icon: Shield },
            { title: "Strong Alumni Network", icon: HeartHandshake },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-soft text-brand flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-ink">{feature.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-brand-soft rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <Quote className="absolute top-4 left-4 w-24 h-24 text-brand/5 -rotate-12" />
        <p className="text-2xl md:text-3xl font-display font-medium text-brand mb-4 relative z-10 italic">
          "Education is not the preparation for life; education is life itself."
        </p>
        <p className="text-accent font-bold">— John Dewey</p>
      </div>
    </motion.div>
  );

  const renderVisionContent = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
        <div className="w-16 h-16 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-ink mb-4">
          Our Vision
        </h3>
        <p className="text-muted leading-relaxed text-lg">
          To be a center of excellence in education that nurtures well-rounded
          individuals who contribute positively to society.
        </p>
      </div>

      <div className="bg-brand p-8 rounded-3xl shadow-md text-white">
        <div className="w-16 h-16 rounded-2xl bg-white/10 text-accent flex items-center justify-center mb-6">
          <Target className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
        <p className="text-white/80 leading-relaxed text-lg">
          To provide quality education that develops intellectual curiosity,
          strong character, and a sense of social responsibility in every
          student.
        </p>
      </div>

      <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-4">
        <h3 className="text-2xl font-display font-bold text-ink mb-8 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { label: "Excellence", icon: Star },
            { label: "Integrity", icon: Shield },
            { label: "Respect", icon: HeartHandshake },
            { label: "Innovation", icon: Target },
            { label: "Community", icon: Users },
          ].map((value, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center mb-3">
                <value.icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-ink">{value.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderFounderContent = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl relative group">
          <img
            src={founderImage}
            alt="Mr. Jaleshwar Mahato - Founder"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Founder information */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white text-lg font-bold">Mr. Jaleshwar Mahato</p>
            <p className="text-white/80 text-sm">Founder</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
              Our Founder
            </h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">
              Mr. Jaleshwar Mahato
            </h2>
          </div>

          <div className="space-y-4 text-muted leading-relaxed text-lg">
            <p>
              A visionary educator and a prominent social worker, Mr. Jaleshwar
              Mahato founded this institution with a noble objective: to make
              quality education accessible to all sections of society.
            </p>
            <p>
              He believed that education is the most powerful tool for social
              transformation. Through his untiring efforts and dedication, he
              laid the foundation of a school that would not only impart
              academic knowledge but also instill strong moral values in its
              students.
            </p>
            <p>
              His vision continues to guide the institution today, inspiring
              educators and students alike to strive for excellence while
              remaining rooted in community values and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPrincipalContent = () => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto w-4/5 md:w-full group">
          <img
            src={principalImage}
            alt="Mr. Dhananjay Mahato - Principal"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
              Principal's Message
            </h3>
            <h2 className="text-3xl font-display font-bold text-ink">
              Welcome to Our School
            </h2>
          </div>

          <div className="space-y-4 text-muted leading-relaxed italic">
            <p>
              "It is with great pride and joy that I welcome you to Ravi Mahato
              Smarak High School. For over two decades, our institution has
              stood as a beacon of learning, committed to the holistic
              development of every child who walks through our doors."
            </p>
            <p>
              "We believe that every child is unique, with their own set of
              talents and potential. Our dedicated team of educators works
              tirelessly to create a safe, nurturing, and intellectually
              stimulating environment where students can discover themselves and
              grow."
            </p>
            <p>
              "As we move forward in this rapidly changing world, we remain
              steadfast in our commitment to our core values while embracing
              modern educational practices. We invite you to be a part of this
              incredible journey of learning and growth."
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-8">
            <h4 className="font-bold text-ink text-lg">Mr. Dhananjay Mahato</h4>
            <p className="text-muted">
              Principal, Ravi Mahato Smarak High School
            </p>
            <div className="mt-4 font-display text-2xl text-brand/40 italic">
              Signature
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-surface min-h-screen">
      <PageHero
        label="Know Our Story"
        title="About School"
        subtitle="A legacy of learning, values and excellence since 1994."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About School", path: "/about" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand text-white shadow-md"
                    : "bg-white text-muted hover:bg-brand-soft hover:text-brand border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "history" && renderHistoryContent()}
                {activeTab === "vision" && renderVisionContent()}
                {activeTab === "founder" && renderFounderContent()}
                {activeTab === "principal" && renderPrincipalContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
