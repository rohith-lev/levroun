'use client';

import React from 'react';
import InzovateProductsSection from '@/components/sections/InzovateProductsSection';
import InzovateContactSection from '@/components/sections/InzovateContactSection';

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <InzovateProductsSection />
      <InzovateContactSection />
    </div>
  );
}
