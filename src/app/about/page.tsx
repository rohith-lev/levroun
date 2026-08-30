'use client';

import React from 'react';
import InzovateAboutSection from '@/components/sections/InzovateAboutSection';
import InzovateTestimonialsSection from '@/components/sections/InzovateTestimonialsSection';
import InzovateContactSection from '@/components/sections/InzovateContactSection';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <InzovateAboutSection />
      <InzovateTestimonialsSection />
      <InzovateContactSection />
    </div>
  );
}
