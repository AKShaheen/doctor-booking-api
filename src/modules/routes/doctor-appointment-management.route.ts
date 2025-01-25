import { AppointmentAdapter } from '../doctor-appointment-management/infrastructure/adapters/sercondary/appointment-module.adapter';
import { ManageAppointmentsUseCase } from '../doctor-appointment-management/core/usecases/manage-appointments.usecase';
import { AppointmentController } from '../doctor-appointment-management/infrastructure/adapters/primary/appointment.controller';
import { Router } from 'express';
import express from 'express';

const router = Router();

// Initialize dependencies
const appointmentRepository = new AppointmentAdapter();
const useCase = new ManageAppointmentsUseCase(appointmentRepository);
const controller = new AppointmentController(useCase);

router.get('/', (req: express.Request, res: express.Response) =>
  controller.getUpcomingAppointments(req, res)
);

router.patch('/', (req: express.Request, res: express.Response) =>
  controller.updateAppointmentStatus(req, res)
);

export { router as appointmentManagementRoutes };
