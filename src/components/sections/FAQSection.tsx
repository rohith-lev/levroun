"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "../ui/Section";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer advanced tracks in Full Stack Development, AI/Machine Learning, Cloud Engineering, Cyber Security, and UI/UX Design.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide 100% placement assistance. Our network includes 500+ hiring partners globally.",
  },
  {
    question: "What is the duration of the courses?",
    answer: "Our standard residency programs run for 3 to 6 months, depending on the specialization track.",
  },
  {
    question: "Are classes online or offline?",
    answer: "We offer both. Our Erode campus provides a high-intensity offline experience, while our digital platform offers a premium remote learning environment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" background="navy">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="md:w-5/12">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Frequently Asked <br/>
            <span className="text-orange-500">Questions.</span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
            Everything you need to know about our admissions, curriculum, and global placement process.
          </p>
          <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm text-white flex flex-col items-start border border-white/10">
            <h4 className="font-bold mb-2">Still have questions?</h4>
            <p className="text-sm text-white/60 mb-6 font-light">Can&apos;t find what you&apos;re looking for? Reach out to our admissions team directly.</p>
            <button className="text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors">Contact Admissions →</button>
          </div>
        </div>

        <div className="md:w-7/12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 last:border-0 pb-4">
              <button
                className="w-full flex items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                <span className="shrink-0 text-white/40">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-white/60 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
