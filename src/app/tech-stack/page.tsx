import FloatingNavbar from '@/components/ui/FloatingNavbar';
import InzovateTechStackSection from '@/components/sections/InzovateTechStackSection';
import InzovateFooter from '@/components/sections/InzovateFooter';

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-white">
      <FloatingNavbar />
      <div className="pt-24">
        <InzovateTechStackSection />
      </div>
      <InzovateFooter />
    </main>
  );
}

