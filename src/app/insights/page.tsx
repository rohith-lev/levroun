"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, Globe, Mail } from 'lucide-react';
import Section from '@/components/ui/Section';

const insights = [
  {
    category: 'Artificial Intelligence',
    title: 'The Future of Generative AI in Enterprise Architecture',
    excerpt: 'Exploring how large language models are transforming backend systems, API design, and automated testing in modern MNCs.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    date: 'May 2026',
    readTime: '8 min read'
  },
  {
    category: 'Cloud Native',
    title: 'Bridging the Kubernetes Talent Gap',
    excerpt: 'Why container orchestration remains the most sought-after skill in tech, and how our curriculum prepares engineers for Day-2 operations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    date: 'April 2026',
    readTime: '6 min read'
  },
  {
    category: 'Engineering Management',
    title: 'From Code to Product: The Shift in Developer Roles',
    excerpt: 'The low-code revolution is forcing engineers to become product thinkers. Here is how we adapt our training methodologies.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    date: 'March 2026',
    readTime: '5 min read'
  }
];

const kpiStats = [
  { label: 'Global Placement Reach', value: '15+', unit: 'Countries', icon: Globe },
  { label: 'Average Salary Growth', value: '140', unit: '% YoY', icon: TrendingUp },
  { label: 'Corporate Partners', value: '500+', unit: 'MNCs', icon: BarChart3 }, 
];

const technologies = [
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <Section background="navy" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">Research & Perspectives</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              Insights shaping the <br className="hidden md:block" />
              future of <span className="text-orange-500">technology.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Read our latest thought leadership, industry analysis, and curriculum research designed to keep our engineers ahead of the enterprise curve.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* KPI Dashboard */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kpiStats.map((stat, idx) => (
            <div key={idx} className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all flex flex-col gap-6 group">
              <div className="flex items-center justify-between text-navy-900">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-orange-500 transition-colors">{stat.label}</span>
                <div className="p-3 rounded-xl bg-orange-50">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-navy-900">{stat.value}</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Articles / Insights Grid */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600 text-lg font-light">Deep dives into enterprise engineering and curriculum strategies.</p>
          </div>
          <button className="text-orange-500 font-bold hover:text-orange-600 transition-colors flex items-center gap-2 pb-1 border-b-2 border-orange-500">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {insights.map((insight, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-navy-900/10 transition-all">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image unoptimized src={insight.image} alt={insight.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-orange-600 uppercase tracking-wider">
                  {insight.category}
                </div>
              </div>
              <div className="px-4 pb-4 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-gray-400">
                  <span>{insight.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{insight.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-orange-500 transition-colors">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base font-light">{insight.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack Focus */}
      <Section background="gray">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-6">Technology Focus</h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">Our curriculum is continuously updated based on enterprise demand. We focus on modern, scalable, and industry-standard tools.</p>
            <button className="px-6 py-3 rounded-full border-2 border-navy-900 text-navy-900 font-bold hover:bg-navy-900 hover:text-white transition-all inline-flex items-center gap-2">
              Explore Syllabus <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border border-gray-100 hover:border-orange-500/30 hover:shadow-lg transition-all group">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all drop-shadow-sm" />
                <span className="text-sm font-bold text-navy-900">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section background="navy">
        <div className="relative overflow-hidden rounded-[3rem] bg-navy-900 border border-white/10 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto lg:mx-0 border border-white/10">
              <Mail className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">Subscribe to our newsletter</h2>
            <p className="text-white/70 font-light text-lg">Get the latest insights on technology trends, enterprise engineering, and curriculum updates delivered straight to your inbox.</p>
          </div>
          
          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-orange-500 transition-colors w-full sm:w-80 text-white placeholder:text-white/40"
            />
            <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors w-full sm:w-auto whitespace-nowrap shadow-lg shadow-orange-500/20">
              Subscribe Now
            </button>
          </div>
        </div>
      </Section>

    </main>
  );
}
