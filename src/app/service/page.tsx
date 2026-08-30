'use client';

import React from 'react';
import InzovateServicesSection from '@/components/sections/InzovateServicesSection';
import InzovateContactSection from '@/components/sections/InzovateContactSection';

export default function ServicePage() {
  return (
    <div className="pt-16">
      <InzovateServicesSection />
      <InzovateContactSection />
    </div>
  );
}
