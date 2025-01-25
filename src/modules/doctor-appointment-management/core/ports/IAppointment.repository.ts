import { IAppointment } from '../../../../shared/database/models/appointment.model';

export interface IAppointmentRepository {
  findUpcoming(doctorId: string): Promise<IAppointment[]>;
  updateStatus(
    appointmentId: string,
    status: 'completed' | 'cancelled'
  ): Promise<void>;
}
