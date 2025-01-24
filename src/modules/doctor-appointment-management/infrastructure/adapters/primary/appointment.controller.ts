import { Request, Response } from "express";
import { ManageAppointmentsUseCase } from "../../../core/usecases/manage-appointments.usecase";

export class AppointmentController {
  constructor(private readonly useCase: ManageAppointmentsUseCase) {}

  async getUpcomingAppointments(req: Request, res: Response) {
    try {
      const appointments = await this.useCase.getUpcomingAppointments(
        req.params.doctorId
      );
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  }

  async updateAppointmentStatus(req: Request, res: Response) {
    try {
      const { status } = req.body;
      await this.useCase.updateAppointmentStatus(
        req.params.appointmentId,
        status
      );
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: "Failed to update appointment status" });
    }
  }
}
