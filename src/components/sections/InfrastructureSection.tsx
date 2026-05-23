"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Image from "next/image";

interface InfraSectionProps {
  data?: {
    _id: string;
    section: string;
    title: string;
    description: string;
    images: string[];
  }[];
}

export default function InfrastructureSection({ data }: InfraSectionProps) {
  // If data is provided from CMS, use the first visible section.
  // Otherwise, fallback to some default empty state or use what we had.
  const content = data && data.length > 0 ? data[0] : null;

  // We map the string URLs to the structure the component expects.
  // Using a fallback for rotate/objectPosition based on index.
  const images = content?.images ? content.images.map((src, index) => ({
    src,
    alt: `${content.title} Image ${index + 1}`,
    rotate: 0,
    objectPosition: "center center",
    wide: index === 0 || index === 3, // Make 1st and 4th wide for the grid
  })) : [
    {
      src: "/image/infra/WhatsApp Image 2026-05-19 at 4.25.29 AM.jpeg",
      alt: "WINORA Reception & Lobby",
      rotate: 0,
      objectPosition: "center center",
      wide: true,
    },
    {
      src: "/image/infra/WhatsApp Image 2026-05-17 at 6.10.30 PM.jpeg",
      alt: "WINORA Learning Studio",
      rotate: 0,
      objectPosition: "center top",
      wide: false,
    },
    {
      src: "/image/infra/WhatsApp Image 2026-05-17 at 6.10.29 PM.jpeg",
      alt: "WINORA Modern Office Class",
      rotate: 0,
      objectPosition: "center center",
      wide: false,
    },
    {
      src: "/image/infra/WhatsApp Image 2026-05-19 at 4.25.28 AM.jpeg",
      alt: "WINORA Tech Lab",
      rotate: 0,
      objectPosition: "center center",
      wide: true,
    }
  ];
  return (
    <Section id="facility" background="navy">
      <div className="flex flex-col items-start max-w-3xl mb-20">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
          {content ? (
            // If the title contains a part we want to highlight, we could parse it,
            // but for safety we'll just render the title directly.
            <>{content.title}</>
          ) : (
            <>
              World-Class Infrastructure. <br />
              <span className="text-orange-500">1,100 SQ FT.</span>
            </>
          )}
        </h2>
        <p className="text-lg text-white/60 font-light leading-relaxed">
          {content ? content.description : "Located in the heart of Chennai's tech corridor. Our campus is designed for focused learning, collaboration, and high-intensity production work."}
        </p>
      </div>

      {/* Row 1: wide lobby + studio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        {images.slice(0, 2).map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            className={`relative rounded-3xl overflow-hidden group shadow-xl h-[260px] md:h-[360px] ${image.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: image.rotate ? `rotate(${image.rotate}deg) scale(1.42)` : "none",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                style={{ objectPosition: image.objectPosition }}
              />
            </div>
            {/* label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="text-white text-sm font-semibold tracking-wider uppercase">
                {image.alt}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          </motion.div>
        ))}
      </div>

      {/* Row 2: tech lab (wide) + class */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {images.slice(2, 4).map((image, index) => (
          <motion.div
            key={index + 2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index + 2) * 0.12 }}
            className={`relative rounded-3xl overflow-hidden group shadow-xl h-[260px] md:h-[360px] ${image.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: image.rotate ? `rotate(${image.rotate}deg) scale(1.42)` : "none",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                style={{ objectPosition: image.objectPosition }}
              />
            </div>
            {/* label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="text-white text-sm font-semibold tracking-wider uppercase">
                {image.alt}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
