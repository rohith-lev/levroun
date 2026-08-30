'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import DemoRequestModal from '@/components/ui/DemoRequestModal';
import { Toaster } from 'react-hot-toast';

interface DemoModalContextProps {
  openDemoModal: (serviceName?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextProps | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('All Services');

  const openDemoModal = (serviceName: string = 'All Services') => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeDemoModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <DemoRequestModal
        isOpen={isOpen}
        onClose={closeDemoModal}
        defaultService={selectedService}
      />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
}
