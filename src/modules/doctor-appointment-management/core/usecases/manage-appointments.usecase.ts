import { IAppointment } from '../../../../shared/database/models/appointment.model';
import { IAppointmentRepository } from '../ports/IAppointment.repository';

export class ManageAppointmentsUseCase {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async getUpcomingAppointments(doctorId: string): Promise<IAppointment[]> {
    return this.appointmentRepo.findUpcoming(doctorId);
  }

  async updateAppointmentStatus(
    appointmentId: string,
    status: 'completed' | 'cancelled'
  ): Promise<void> {
    return this.appointmentRepo.updateStatus(appointmentId, status);
  }
}
