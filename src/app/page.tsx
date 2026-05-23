import HeroSection from "@/components/sections/HeroSection";
import connectDB from "@/lib/mongodb";
import InfrastructureContent from "@/lib/models/InfrastructureContent";
import Testimonial from "@/lib/models/Testimonial";
import CoursesSection from "@/components/sections/CoursesSection";
import PlacementSection from "@/components/sections/PlacementSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home() {
  await connectDB();
  // Fetch infrastructure content directly from the DB
  const infraDocs = await InfrastructureContent.find({ isVisible: true }).sort({ order: 1 }).lean();
  
  // Serialize the data for Client Components
  const serializedInfra = infraDocs.map(doc => ({
    _id: doc._id.toString(),
    section: doc.section,
    title: doc.title,
    description: doc.description,
    images: doc.images,
  }));

  // Fetch testimonials
  const testimonialDocs = await Testimonial.find({ isVisible: true }).sort({ order: 1 }).lean();
  const serializedTestimonials = testimonialDocs.map(doc => ({
    _id: doc._id.toString(),
    name: doc.name,
    role: doc.role,
    story: doc.story,
    image: doc.image,
  }));

  return (
    <>
      <HeroSection />
      <CoursesSection />
      <PlacementSection />
      <InfrastructureSection data={serializedInfra} />
      <TestimonialsSection testimonials={serializedTestimonials} />
      <FAQSection />
      <ContactSection />
    </>
  );
}
