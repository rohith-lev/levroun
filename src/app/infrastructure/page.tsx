'use client';

import React, { useState } from 'react';
import {
  Server,
  Cpu,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Layers,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  ArrowRight,
  HardDrive,
  Activity,
  Network
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';
import { FadeUp } from '@/components/ui/FadeUp';

export interface InfraImageItem {
  id: string;
  title: string;
  category: 'Server & Datacenter' | 'Hardware & AI Lab' | 'Engineering Workspaces' | 'Security & Networking';
  description: string;
  specs: string[];
  src: string;
}

const INFRA_IMAGES: InfraImageItem[] = [
  {
    id: 'infra-1',
    title: 'Enterprise High-Density Server Racks',
    category: 'Server & Datacenter',
    description: 'Central rack infrastructure featuring dual power supplies, hot-swappable enterprise NVMe arrays, and active climate management.',
    specs: ['Redundant Power (N+1)', 'Enterprise NVMe Storage', 'Active Cooling Systems'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.21.40 AM.jpeg'
  },
  {
    id: 'infra-2',
    title: 'Multi-Monitor AI Engineering Workstation',
    category: 'Hardware & AI Lab',
    description: 'Dedicated high-performance development station for training machine learning models and high-throughput code compilation.',
    specs: ['NVIDIA Tensor Compute GPUs', '32-Core Workstation Processors', 'Triple 4K Color-Calibrated Displays'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.21.42 AM.jpeg'
  },
  {
    id: 'infra-3',
    title: 'Hardware & Embedded Systems Bench',
    category: 'Hardware & AI Lab',
    description: 'Hardware testing station equipped with digital oscilloscopes, power analyzers, and microcontroller programming tools.',
    specs: ['Real-Time Signal Oscilloscopes', 'IoT Prototype Testing', 'ESD-Safe Workbenches'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.21.43 AM.jpeg'
  },
  {
    id: 'infra-4',
    title: 'Core Optical Fiber Network Switch Unit',
    category: 'Security & Networking',
    description: '10 Gbps symmetric optical fiber distribution hub providing low-latency connectivity and automated failover routing.',
    specs: ['10 Gbps Symmetric Fiber', 'Managed Layer-3 Switches', 'Zero-Packet-Drop Failover'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.21.45 AM.jpeg'
  },
  {
    id: 'infra-5',
    title: 'Software Development & Collaboration Suite',
    category: 'Engineering Workspaces',
    description: 'Ergonomic open-plan engineering space built for agile sprint standups, pair programming, and peer code reviews.',
    specs: ['High-Speed Mesh Wi-Fi 6E', 'Ergonomic Workstations', 'Acoustic Soundproofing'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.08 AM (1).jpeg'
  },
  {
    id: 'infra-6',
    title: 'High-Throughput Database Server Infrastructure',
    category: 'Server & Datacenter',
    description: 'High-availability PostgreSQL & MongoDB replica sets running on isolated fiber channels with automated snapshot backups.',
    specs: ['Automated Hourly Backups', 'HA Cluster Replication', 'AES-256 Encrypted Volumes'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.08 AM.jpeg'
  },
  {
    id: 'infra-7',
    title: 'Agile Engineering & Strategy Room',
    category: 'Engineering Workspaces',
    description: 'Interactive sprint planning room equipped with smart displays for architecture mapping and system design sessions.',
    specs: ['Interactive Digital Whiteboards', 'Video Conferencing Tech', 'Real-Time Deployment Dashboards'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.09 AM (1).jpeg'
  },
  {
    id: 'infra-8',
    title: 'NOC & Threat Monitoring Center',
    category: 'Security & Networking',
    description: '24/7 Network Operations Monitoring Station tracking server health, network traffic spikes, and intrusion detection alerts.',
    specs: ['24/7 Threat Monitoring', 'Automated DDoS Mitigation', 'SIEM Log Analytics'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.09 AM.jpeg'
  },
  {
    id: 'infra-9',
    title: 'Deep Learning & Neural Network GPU Cluster',
    category: 'Hardware & AI Lab',
    description: 'Custom AI acceleration rig designed for distributed model inference, NLP fine-tuning, and computer vision tasks.',
    specs: ['Distributed PyTorch Clusters', 'CUDA-Optimized Compute', 'Custom Liquid-Cooled Architecture'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.10 AM (1).jpeg'
  },
  {
    id: 'infra-10',
    title: 'Quality Assurance & Device Testing Matrix',
    category: 'Engineering Workspaces',
    description: 'Multi-device mobile and web testing platform verifying software performance across iOS, Android, and desktop browsers.',
    specs: ['Automated End-to-End Testing', 'Cross-Platform Device Grid', 'Real-Time Latency Metrics'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.10 AM.jpeg'
  },
  {
    id: 'infra-11',
    title: 'Continuous Integration & Build Server Array',
    category: 'Server & Datacenter',
    description: 'Automated CI/CD build node server executing parallel Docker image builds and continuous integration checks.',
    specs: ['Parallel Build Runners', 'Zero-Downtime Releases', 'Microservice Container Stacks'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.11 AM (1).jpeg'
  },
  {
    id: 'infra-12',
    title: 'Embedded System Prototyping Laboratory',
    category: 'Hardware & AI Lab',
    description: 'Specialized lab space for developing IoT edge compute hardware, sensor node integration, and industrial firmware.',
    specs: ['ARM / RISC-V Architecture Labs', 'Custom PCB Fabrication Sync', 'Industrial IoT Protocols'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.11 AM (2).jpeg'
  },
  {
    id: 'infra-13',
    title: 'Hardware Cryptographic & Disaster Recovery Unit',
    category: 'Security & Networking',
    description: 'Air-gapped offline disaster recovery storage system protecting proprietary codebases and critical client data.',
    specs: ['Hardware Security Modules (HSM)', 'Air-Gapped Backup Storage', 'SOC-2 Compliance Standards'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.11 AM.jpeg'
  },
  {
    id: 'infra-14',
    title: 'Innovation & Product R&D Suite',
    category: 'Engineering Workspaces',
    description: 'Creative engineering hub dedicated to researching emerging software paradigms, cloud optimization, and AI algorithms.',
    specs: ['Rapid MVP Acceleration', 'Research & Development Focus', 'Collaborative Design Thinking'],
    src: '/image/infra/infra-infra-WhatsApp Image 2026-08-03 at 7.22.12 AM.jpeg'
  }
];

const CATEGORIES = [
  'All Infrastructure',
  'Server & Datacenter',
  'Hardware & AI Lab',
  'Engineering Workspaces',
  'Security & Networking'
] as const;

export default function InfrastructurePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Infrastructure');
  const [activeModalImage, setActiveModalImage] = useState<InfraImageItem | null>(null);
  const { openDemoModal } = useDemoModal();

  const filteredImages = selectedCategory === 'All Infrastructure'
    ? INFRA_IMAGES
    : INFRA_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 overflow-x-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest shadow-xl shadow-cyan-950/40">
            <Server className="w-4 h-4 text-cyan-400" /> Enterprise Physical & Digital Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Company Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Infrastructure
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Discover the high-density server facilities, custom AI hardware labs, and zero-trust engineering environments powering Inzovate Technologies&apos; enterprise software solutions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-cyan-400">100+ TFLOPS</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">AI Compute Power</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-blue-400">99.99%</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Infrastructure Uptime</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-indigo-400">10 Gbps</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Redundant Fiber</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-purple-400">SOC-2</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Security Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-300/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <FadeUp key={img.id} delay={idx * 0.05}>
              <div className="group relative bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/60 flex flex-col h-full">
                {/* Image Container with Hover Effects */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950 cursor-pointer" onClick={() => setActiveModalImage(img)}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                      {img.category}
                    </span>
                  </div>

                  {/* Expand Lightbox Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalImage(img);
                    }}
                    className="absolute bottom-4 right-4 z-10 p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white hover:text-cyan-400 hover:border-cyan-400 transition-colors backdrop-blur-md"
                    aria-label="Expand image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {img.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {img.description}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                    {img.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Deep-Dive Technical Insights Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-white">Inzovate Infrastructure Insights</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Behind our software applications sits a robust, fault-tolerant infrastructure built for speed, security, and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">High-Performance Compute</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Dedicated CUDA GPU nodes and multi-socket CPU clusters optimize complex AI training, data pipelines, and microservices workloads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero-Trust Security</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                End-to-end AES-256 volume encryption, hardware security modules, automated vulnerability scanning, and strict role-based access control.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Continuous Deployment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Automated Docker and Kubernetes orchestration pipelines ensure seamless code deployment with zero downtime for our enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Want a Tour of Our Tech & Infrastructure?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Schedule a virtual or on-site consultation with our core engineering team to see how our infrastructure can power your business.
            </p>
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/20 active:scale-95 transition-transform"
            >
              <Sparkles className="w-4 h-4" /> Book Infrastructure Tour <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Image Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-cyan-400 tracking-widest block">
                  {activeModalImage.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeModalImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative max-h-[60vh] sm:max-h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="w-full h-full object-contain max-h-[60vh] sm:max-h-[70vh]"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-3">
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalImage.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {activeModalImage.specs.map((spec) => (
                  <span key={spec} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-semibold">
                    ✓ {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
