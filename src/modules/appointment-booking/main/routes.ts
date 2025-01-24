// src/modules/appointment-booking/infrastructure/routes.ts
import { Router } from "express";
import { BookAppointmentUseCase } from "../application/use-cases/book-appointment.usecase";
import { AppointmentController } from "../interface/controllers/appointment-booking.controller";

const router = Router();

const bookAppointmentUseCase = new BookAppointmentUseCase(slotRepository);

const controller = new AppointmentController(bookAppointmentUseCase);

router.get("/slots", controller.getAvailableSlots.bind(controller));
router.post("/slots/:slotId/book", controller.bookAppointment.bind(controller));

export default router;
