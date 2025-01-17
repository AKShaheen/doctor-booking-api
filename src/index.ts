import express from "express";
import mongoose from "mongoose";
import { doctorAvailabilityRoutes } from "./modules/routes/routes";
// import Redis from "ioredis";

const app = express();
app.use(express.json());

const IS_CONSUMER_SERVER: boolean = process.env.IS_CONSUMER_SERVER === "true";
const PORT: number =
  Number(process.env.PORT) || (IS_CONSUMER_SERVER ? 3002 : 3001);
const MONGO_URI: string =
  process.env.MONGO_URI || "mongodb://mongo:27017/doctor-booking-db";
// const REDIS_URI: string = process.env.REDIS_URI || "redis://localhost:6379";

// Initialize MongoDB connection
async function connectToMongoDB(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

async function initializeBackendService(): Promise<void> {
  app.use("/api", doctorAvailabilityRoutes);

  app.all("", (req, res) => {
    res.send("success");
  });

  app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}`);
  });
}

// Main initialization function
async function main(): Promise<void> {
  await connectToMongoDB();
  // await connectToRedis();

  if (IS_CONSUMER_SERVER) {
    //initialize consumer
    console.log("Consumer started successfully");
  } else {
    await initializeBackendService();
  }
}

main().catch((err: Error) => {
  console.error("Application initialization error:", err);
  process.exit(1);
});
