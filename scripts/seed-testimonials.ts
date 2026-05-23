import mongoose from 'mongoose';
import { loadEnvConfig } from '@next/env';
import { resolve } from 'path';

// Load env vars
loadEnvConfig(resolve(process.cwd()));

// Setup Mongoose Model
const TestimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  story: String,
  image: String,
  isVisible: Boolean,
  order: Number,
}, { timestamps: true });

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer at Amazon",
    story: "From ₹15K to ₹8 LPA in just 3 months! WINORA changed my life completely. The mentorship was world-class.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    isVisible: true,
    order: 1
  },
  {
    name: "Priya Sharma",
    role: "AI Engineer at TCS",
    story: "The AI/ML course was incredible! Now I'm working on cutting-edge AI projects. The practical labs made the difference.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    isVisible: true,
    order: 2
  },
  {
    name: "Amit Patel",
    role: "UI/UX Designer at Wipro",
    story: "The design course opened up a whole new creative world for me! I'm now leading design sprints at a top firm.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    isVisible: true,
    order: 3
  },
];

async function seedTestimonials() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is undefined');

    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    
    console.log('Clearing existing testimonials...');
    await Testimonial.deleteMany({});
    
    console.log('Inserting new testimonials...');
    await Testimonial.insertMany(testimonials);
    
    console.log('Successfully seeded testimonials!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding testimonials:', error);
    process.exit(1);
  }
}

seedTestimonials();
