// src/modules/appointment-booking/infrastructure/controllers/appointment.controller.ts
import { Request, Response } from "express";
import { BookAppointmentUseCase } from "../../application/use-cases/book-appointment.usecase";

export class AppointmentController {
  constructor(private bookAppointmentUseCase: BookAppointmentUseCase) {}

  async bookAppointment(req: Request, res: Response) {
    try {
      const { slotId } = req.params;
      const { patientId, patientName } = req.body;

      const result = await this.bookAppointmentUseCase.execute(
        slotId,
        patientId,
        patientName
      );

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getAvailableSlots(req: Request, res: Response) {
    // Implementation depends on your slot repository
  }
}
