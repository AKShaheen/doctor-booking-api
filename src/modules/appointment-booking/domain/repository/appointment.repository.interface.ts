import { Appointment } from '../entities/appointment.entity';

export interface IAppointmentRepository {
  createAppointment(appointment: Appointment): Promise<string>;
}
