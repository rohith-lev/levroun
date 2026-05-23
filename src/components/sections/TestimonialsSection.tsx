'use client';

import Section from "../ui/Section";
import Image from "next/image";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  story: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate testimonials enough times to ensure smooth infinite scrolling
  // We need the total width to be at least 2x screen width, so duplicating 4 times (12 items) is safe
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <Section id="about" className="overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:active .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 px-6">
        <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-6">
          Authentic Journeys. <br/>
          <span className="text-orange-500">Exceptional Results.</span>
        </h2>
        <p className="text-lg text-foreground/60 font-light leading-relaxed">
          Don&apos;t just take our word for it. Hear from the graduates who are now leading the technology charge.
        </p>
      </div>

      <div className="relative group max-w-[100vw] overflow-hidden py-4">
        {/* Fading Edges to make the infinite loop look seamless */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 w-max animate-marquee pl-6 pr-0">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial._id}-${index}`}
              className="w-[85vw] sm:w-[380px] p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-8 border-2 border-white shadow-sm shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg font-light text-navy-900/80 italic leading-relaxed mb-10 flex-1">
                &quot;{testimonial.story}&quot;
              </p>
              <div className="mt-auto pt-5 border-t border-gray-200/60 w-full">
                <div className="font-bold text-navy-900 text-base">{testimonial.name}</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-orange-500 mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
