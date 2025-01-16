import mongoose from "mongoose";

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect("mongodb://localhost:27017/doctor-appointments");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
