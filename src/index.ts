import express from 'express';
import { connectToMongoDB } from './config/database';
import {
  appointmentBookingRoutes,
  doctorAvailabilityRoutes,
} from './modules/routes';

import './modules/appointment-confirmation/appointment-confirmation.listener';

// import Redis from "ioredis";

const app = express();
app.use(express.json());

const IS_CONSUMER_SERVER: boolean = process.env.IS_CONSUMER_SERVER === 'true';
const PORT: number =
  Number(process.env.PORT) || (IS_CONSUMER_SERVER ? 3002 : 3001);
// const REDIS_URI: string = process.env.REDIS_URI || "redis://localhost:6379";

async function initializeBackendService(): Promise<void> {
  app.use('/api/slots', doctorAvailabilityRoutes);
  app.use('/api/appointments-booking', appointmentBookingRoutes);
  // app.use('/api')

  app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}`);
  });
}

async function main(): Promise<void> {
  await connectToMongoDB();
  // await connectToRedis();

  if (IS_CONSUMER_SERVER) {
    //initialize consumer
    console.log('Consumer started successfully');
  } else {
    await initializeBackendService();
  }
}

main().catch((err: Error) => {
  console.error('Application initialization error:', err);
  process.exit(1);
});
