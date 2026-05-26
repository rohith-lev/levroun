"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Laptop, Building, Star, CheckCircle2, Award } from 'lucide-react';
import Section from '@/components/ui/Section';

const stats = [
  { value: '1,000+', label: 'Students Trained', icon: Users },
  { value: '50+', label: 'Technical Workshops', icon: Laptop },
  { value: '25+', label: 'Academic Partners', icon: Building },
  { value: '95%', label: 'Placement Rate', icon: Trophy },
];

const collaborations = [
  { name: 'KSR College of Engineering', image: '/image/academic_partners/KSR College of Engineering.jpeg' },
  { name: 'SSM College of Engineering', image: '/image/academic_partners/SSM College of Engineering.png' },
  { name: 'Nandha Polytechnic', image: '/image/academic_partners/Nandha Polytechnic.jpeg' },
  { name: 'Nandha Engineering', image: '/image/academic_partners/Nandha Engineering.jpeg' },
  { name: 'Sengunthar College', image: '/image/academic_partners/Sengunthar College.png' },
  { name: 'Excel Engineering', image: '/image/academic_partners/Excel Engineering.png' },
];

const highlights = [
  {
    title: 'Industry-Oriented Training',
    description: 'Successfully conducted real-time industry-focused Value Added Courses for Engineering and Polytechnic students.',
    icon: Star,
  },
  {
    title: 'Skill Development Impact',
    description: 'Enhanced practical technical skills through hands-on workshops, live projects, and modern industry curriculum.',
    icon: CheckCircle2,
  },
  {
    title: 'Career Empowerment',
    description: 'Guided students with resume building, interview preparation, internships, and comprehensive career mentorship.',
    icon: Award,
  },
  {
    title: 'Innovation & Technology',
    description: 'Delivered advanced training programs in UI/UX, Web Development, Data Analytics, AI, and Cloud Computing.',
    icon: Laptop,
  },
];

const technologies = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const events = [
  { title: 'Tech Symposium 2025', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', date: 'March 2025' },
  { title: 'AI Workshop Series', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80', date: 'January 2025' },
  { title: 'Cloud Computing Bootcamp', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', date: 'November 2024' },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <Section background="navy" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Enterprise Impact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              Empowering the next <br className="hidden md:block" />
              generation of <span className="text-orange-500">engineers.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 font-light">
              We partner with leading academic institutions to deliver industry-grade technical education, bridging the gap between traditional learning and enterprise requirements.
            </p>
            <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Programs <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-2">
                <stat.icon className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-navy-900">{stat.value}</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academic Collaborations */}
      <Section background="gray">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">Academic Partners</h2>
          <p className="text-gray-600 font-light text-lg">Trusted by premier engineering and technology institutions to elevate their curriculum.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collaborations.map((collab, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group flex flex-col items-center justify-center text-center gap-4 aspect-square">
              <div className="w-16 h-16 relative grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image unoptimized src={collab.image} alt={collab.name} fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-navy-900 line-clamp-2">{collab.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Highlights Bento Grid */}
      <Section background="white">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900">Program Highlights</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <highlight.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section background="navy">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Enterprise Technology Stack</h2>
            <p className="text-white/70 text-lg font-light">We train students on the most demanded technologies across Fortune 500 companies.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <span className="text-sm font-semibold text-white/90">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Events Showcase */}
      <Section background="gray">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">Workshops & Events</h2>
            <p className="text-gray-600 text-lg font-light">A glimpse into our vibrant ecosystem of learning and collaboration.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="group cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image unoptimized src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-navy-900">
                  {event.date}
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-orange-500 transition-colors">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-orange-500 to-orange-600 text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">Ready to transform your career?</h2>
            <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg">Join the next generation of industry leaders. Our intensive programs are designed for immediate enterprise impact.</p>
            <button className="px-10 py-5 rounded-full bg-navy-900 text-white font-bold hover:bg-navy-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
              Apply for Next Cohort
            </button>
          </div>
        </div>
      </Section>

    </main>
  );
}
