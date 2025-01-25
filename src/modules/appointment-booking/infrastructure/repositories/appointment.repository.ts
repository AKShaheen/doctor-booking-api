import { IAppointmentRepository } from '../../domain/repository';
import { Appointment } from '../../domain/entities/appointment.entity';
import { AppointmentModel } from '../../../../shared/database/models/appointment.model';

export class AppointmentRepository implements IAppointmentRepository {
  async createAppointment(appointment: Appointment): Promise<string> {
    const newAppointment = new AppointmentModel(appointment);

    const savedAppointment = await newAppointment.save();

    return savedAppointment._id.toString();
  }

  async getAppointmentById(appointmentId: string): Promise<Appointment | null> {
    return AppointmentModel.findById(appointmentId);
  }
}
