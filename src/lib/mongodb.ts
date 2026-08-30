import mongoose from 'mongoose';

// SSRF Fix: Validate URI is a legitimate MongoDB connection string
function validateMongoURI(uri: string): void {
  if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
    throw new Error('Invalid MONGODB_URI: must start with mongodb:// or mongodb+srv://');
  }
  // Block private/internal IP ranges
  const privatePatterns = [
    /mongodb:\/\/127\./,
    /mongodb:\/\/0\.0\.0\.0/,
    /mongodb:\/\/169\.254\./,  // AWS metadata
    /mongodb:\/\/10\./,
    /mongodb:\/\/192\.168\./,
  ];
  // Allow localhost/private IPs (self-hosted MongoDB)
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_LOCAL_MONGO !== 'true') {
    if (privatePatterns.some(p => p.test(uri))) {
      throw new Error('Invalid MONGODB_URI: private IP ranges not allowed in production');
    }
  }
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };
global.mongoose = cached;

async function connectDB(): Promise<typeof mongoose | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI environment variable is not defined.');
    return null;
  }

  try {
    validateMongoURI(uri);
  } catch (err) {
    console.warn('MONGODB_URI validation error:', (err as Error).message);
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4,
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 5000,
    };
    cached.promise = mongoose.connect(uri, opts);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    console.warn('MongoDB connection unavailable:', (e as Error).message);
    return null;
  }
}

export default connectDB;
