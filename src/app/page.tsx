'use client';

import React from 'react';
import InzovateHeroSection from '@/components/sections/InzovateHeroSection';
import InzovateServicesSection from '@/components/sections/InzovateServicesSection';
import InzovateProductsSection from '@/components/sections/InzovateProductsSection';
import InzovateTechStackSection from '@/components/sections/InzovateTechStackSection';
import InzovateAboutSection from '@/components/sections/InzovateAboutSection';
import InzovateTestimonialsSection from '@/components/sections/InzovateTestimonialsSection';
import InzovateContactSection from '@/components/sections/InzovateContactSection';

export default function Home() {
  return (
    <>
      <InzovateHeroSection />
      <InzovateServicesSection />
      <InzovateProductsSection />
      <InzovateTechStackSection />
      <InzovateAboutSection />
      <InzovateTestimonialsSection />
      <InzovateContactSection />
    </>
  );
}
