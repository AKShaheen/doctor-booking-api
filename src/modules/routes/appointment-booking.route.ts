import express from 'express';
import { AppointmentBookingController } from '../appointment-booking/interface/controllers/appointment-booking.controller';
import { DoctorAvailabilitySlotRepositoryAdapter } from '../appointment-booking/infrastructure/adapters/doctor-availability-slot-repository.adapter';
import { AppointmentRepository } from '../appointment-booking/infrastructure/repositories/appointment.repository';

const router = express.Router();

const doctorAvailabilitySlotRepository =
  new DoctorAvailabilitySlotRepositoryAdapter();
const appointmentRepository = new AppointmentRepository();

const appointmentBookingController = new AppointmentBookingController(
  doctorAvailabilitySlotRepository,
  appointmentRepository
);

router.get('/', appointmentBookingController.getAvailableSlots);
router.post('/', appointmentBookingController.bookAppointment);

export { router as appointmentBookingRoutes };
