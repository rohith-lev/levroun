import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import Visitor from '../src/lib/models/Visitor';
import Contact from '../src/lib/models/Contact';
import InfrastructureContent from '../src/lib/models/InfrastructureContent';
import Admin from '../src/lib/models/Admin';

// Manual env loader for .env.local
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        // Remove quotes if present
        if (val.length > 0 && val.charAt(0) === '"' && val.charAt(val.length - 1) === '"') {
          val = val.substring(1, val.length - 1);
        }
        if (val.length > 0 && val.charAt(0) === "'" && val.charAt(val.length - 1) === "'") {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val.trim();
      }
    });
  }
}

loadEnv();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI environment variable is not defined.');
  process.exit(1);
}

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI!);
    console.log('Connected successfully.');

    // 1. Seed Admin
    const adminEmail = 'admin@winora.com';
    const adminExists = await Admin.findOne({ email: adminEmail });
    if (!adminExists) {
      console.log('Creating sample admin...');
      await Admin.create({
        email: adminEmail,
        password: await bcrypt.hash('Admin@123', 12),
        name: 'Super Admin',
        role: 'super_admin'
      });
    }

    // 2. Seed Infrastructure Content
    console.log('Seeding Infrastructure Content...');
    await InfrastructureContent.deleteMany({});
    await InfrastructureContent.insertMany([
      {
        section: 'library',
        title: 'Modern Library',
        description: 'A quiet place for focused learning with thousands of resources.',
        images: ['/images/infra-library.jpg'],
        order: 1,
        isVisible: true
      },
      {
        section: 'labs',
        title: 'High-Tech AI Labs',
        description: 'Equipped with the latest hardware for machine learning research.',
        images: ['/images/infra-labs.jpg'],
        order: 2,
        isVisible: true
      }
    ]);

    // 3. Seed Contacts (Messages)
    console.log('Seeding Contacts...');
    await Contact.deleteMany({});
    await Contact.insertMany([
      {
        name: 'Alice Smith',
        email: 'alice@example.com',
        phone: '123-456-7890',
        message: 'I am interested in the AI certification course.',
        status: 'unread',
        submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        message: 'Could you provide more details about campus housing?',
        status: 'read',
        submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
      }
    ]);

    // 4. Seed Visitors (Analytics)
    console.log('Seeding Visitors (Analytics)...');
    await Visitor.deleteMany({});
    const visitors = [];
    for (let i = 0; i < 50; i++) {
      const isMobile = Math.random() > 0.6;
      visitors.push({
        sessionId: `session_${i}`,
        page: Math.random() > 0.5 ? '/' : '/courses',
        deviceType: isMobile ? 'mobile' : 'desktop',
        ip: '127.0.0.1',
        visitedAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7) // random time in last 7 days
      });
    }
    await Visitor.insertMany(visitors);

    console.log('----------------------------------------');
    console.log('Sample Data Seeded Successfully!');
    console.log('- Admin account created');
    console.log('- 2 Infrastructure items created');
    console.log('- 2 Contact messages created');
    console.log('- 50 Visitor logs created');
    console.log('----------------------------------------');

  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

seed();
