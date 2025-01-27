import express from 'express';
import { connectToMongoDB } from './shared/database/config/database';
import {
  appointmentBookingRoutes,
  appointmentManagementRoutes,
  doctorAvailabilityRoutes,
} from './modules/routes';

import './modules/appointment-confirmation/appointment-confirmation.listener';

const app = express();
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 3001;

async function initializeBackendService(): Promise<void> {
  app.use('/api/slots', doctorAvailabilityRoutes);
  app.use('/api/appointments-booking', appointmentBookingRoutes);
  app.use('/api/appointments-management', appointmentManagementRoutes);

  app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}`);
  });
}

async function main(): Promise<void> {
  await connectToMongoDB();
  await initializeBackendService();
}

main().catch((err: Error) => {
  console.error('Application initialization error:', err);
  process.exit(1);
});
