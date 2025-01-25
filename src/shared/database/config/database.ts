import mongoose from 'mongoose';

const MONGO_URI: string =
  process.env.MONGO_URI || 'mongodb://mongo:27017/doctor-booking-db';

export async function connectToMongoDB(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
