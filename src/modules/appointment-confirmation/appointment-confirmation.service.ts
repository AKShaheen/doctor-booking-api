import { IAppointment } from '../../shared/database/models/appointment.model';
import { ISlot } from '../../shared/database/models/slot.model';
import { AppointmentRepository } from '../appointment-booking/infrastructure/repositories/appointment.repository';
import { SlotRepository } from '../doctor-availability/repositories/slots-repository';

interface IAppointmentConfirmationService {
  doctorName: string;
  patientName: string;
  appointmentDate: string;
}

export class AppointmentConfirmationService {
  constructor(
    private slotRepository = new SlotRepository(),
    private appointmentRepository = new AppointmentRepository()
  ) {}

  public async sendNotification(appointmentId: string) {
    const appointment: IAppointment | null =
      await this.appointmentRepository.getAppointmentById(appointmentId);

    if (!appointment) return;

    const slot: ISlot | null = await this.slotRepository.getSlotById(
      appointment.slotId
    );

    if (!slot) return;

    const message: IAppointmentConfirmationService = {
      doctorName: slot.doctorName,
      patientName: appointment.patientName,
      appointmentDate: appointment.appointmentTime,
    };

    this.notifyPatient(message);
    this.notifyDoctor(message);
  }

  private notifyDoctor(message: IAppointmentConfirmationService) {
    console.log(
      `[NOTIFICATION] Hello Dr. ${message.doctorName}, you have an appointment with ${message.patientName} on ${message.appointmentDate}`
    );
  }

  private notifyPatient(message: IAppointmentConfirmationService) {
    console.log(
      `[NOTIFICATION] Hello ${message.patientName}, you have an appointment with Dr. ${message.doctorName} on ${message.appointmentDate}`
    );
  }
}
