import React from 'react';
import Image from 'next/image';

interface EventCarouselProps {
  images: { src: string; alt?: string }[];
}

export const EventCarousel: React.FC<EventCarouselProps> = ({ images }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide py-4 px-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-[500px] h-56 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
          >
            <Image src={img.src} alt={img.alt ?? `Event ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
