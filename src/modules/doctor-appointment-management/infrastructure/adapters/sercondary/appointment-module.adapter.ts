import moment from 'moment';
import {
  AppointmentModel,
  IAppointment,
} from '../../../../../shared/database/models/appointment.model';
import { IAppointmentRepository } from '../../../core/ports/IAppointment.repository';

export class AppointmentAdapter implements IAppointmentRepository {
  async findUpcoming(doctorId: string): Promise<IAppointment[]> {
    return AppointmentModel.find({
      doctorId,
      appointmentTime: {
        $gte: moment(new Date(), 'DD/MM/YYYY hh:mm a', 'Africa/Cairo').toDate(),
      },
      status: 'scheduled',
    }).lean();
  }

  async updateStatus(
    appointmentId: string,
    status: 'completed' | 'cancelled'
  ): Promise<void> {
    await AppointmentModel.findByIdAndUpdate(appointmentId, { status }).exec();
  }
}
