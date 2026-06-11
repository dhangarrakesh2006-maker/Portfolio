import mongoose from 'mongoose';

let databaseReady = false;

mongoose.connection.on('connected', () => {
  databaseReady = true;
});

mongoose.connection.on('disconnected', () => {
  databaseReady = false;
});

export async function connectDB() {
  if (!process.env.MONGODB_URI) {
    console.warn('MongoDB is not configured. Add MONGODB_URI to enable contact message storage.');
    databaseReady = false;
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB_NAME || undefined,
    });
    databaseReady = true;
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    databaseReady = false;
    console.error('MongoDB connection failed:', error.message);
    return false;
  }
}

export function isDatabaseReady() {
  return databaseReady && mongoose.connection.readyState === 1;
}
