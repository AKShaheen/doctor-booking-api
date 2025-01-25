import express from 'express';
import { DoctorAvailabilityController } from '../doctor-availability/controllers/slot.controller';

const router = express.Router();
const doctorAvailabilityController = new DoctorAvailabilityController();

router.get('/', (req: express.Request, res: express.Response) =>
  doctorAvailabilityController.listSlots(req, res)
);

router.post('/', (req: express.Request, res: express.Response) =>
  doctorAvailabilityController.addSlot(req, res)
);

export { router as doctorAvailabilityRoutes };
