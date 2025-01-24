import { Router } from "express";
import { MongoAppointmentRepository } from "./adapters/sercondary/mongo-appointment.repository";
import { ManageAppointmentsUseCase } from "../core/usecases/manage-appointments.usecase";
import { AppointmentController } from "./adapters/primary/appointment.controller";
import { AppointmentModel } from "../../../shared/database/models/appointment.model";

const router = Router();

// Initialize dependencies
const appointmentRepository = new MongoAppointmentRepository(AppointmentModel);
const useCase = new ManageAppointmentsUseCase(appointmentRepository);
const controller = new AppointmentController(useCase);

// Configure routes
router.get(
  "/doctors/:doctorId/appointments",
  controller.getUpcomingAppointments.bind(controller)
);
router.patch(
  "/appointments/:appointmentId/status",
  controller.updateAppointmentStatus.bind(controller)
);

export default router;
