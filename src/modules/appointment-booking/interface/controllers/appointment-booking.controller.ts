import { Request, Response } from 'express';
import {
  BookAppointmentUseCase,
  ListAvailableAppointmentsUseCase,
} from '../../application/use-cases';
import {
  IAppointmentRepository,
  ISlotsRepository,
} from '../../domain/repository';

export class AppointmentBookingController {
  private bookAppointmentUseCase: BookAppointmentUseCase;
  private listAvailableAppointmentsUseCase: ListAvailableAppointmentsUseCase;

  constructor(
    slotRepository: ISlotsRepository,
    appointmentRepository: IAppointmentRepository
  ) {
    this.bookAppointmentUseCase = new BookAppointmentUseCase(
      slotRepository,
      appointmentRepository
    );

    this.listAvailableAppointmentsUseCase =
      new ListAvailableAppointmentsUseCase(slotRepository);

    this.bookAppointment = this.bookAppointment.bind(this);
    this.getAvailableSlots = this.getAvailableSlots.bind(this);
  }
  async bookAppointment(req: Request, res: Response) {
    try {
      const slotId = req.query.slotId as string;
      const { patientId, patientName } = req.body;

      const result = await this.bookAppointmentUseCase.execute(
        slotId,
        patientId,
        patientName
      );

      res.status(201).json(result);
    } catch (error: any) {
      res
        .status(400)
        .json({ error: error.message || 'An unexpected error occurred' });
    }
  }

  async getAvailableSlots(req: Request, res: Response) {
    try {
      const result = await this.listAvailableAppointmentsUseCase.execute();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({
        error: error.message || 'An unexpected error occurred',
      });
    }
  }
}
