import { time } from 'console';
import { eventEmitter } from '../../../../shared/events/event-emitter';
import { Appointment } from '../../domain/entities/appointment.entity';
import {
  IAppointmentRepository,
  ISlotsRepository,
} from '../../domain/repository';

export class BookAppointmentUseCase {
  constructor(
    private slotRepository: ISlotsRepository,
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute(
    slotId: string,
    patientId: string,
    patientName: string,
    appointmentTime: Date
  ): Promise<Appointment> {
    const slotReservation = await this.slotRepository.reserveSlot(slotId);

    if (!slotReservation) {
      throw new Error('Slot is unavailable');
    }

    const appointment = new Appointment(
      slotId,
      patientId,
      patientName,
      appointmentTime
    );

    const createdAppointmentId =
      await this.appointmentRepository.createAppointment(appointment);

    if (createdAppointmentId) {
      console.log('Emitting event: appointmentCreated', {
        appointmentId: createdAppointmentId,
      });

      eventEmitter.emit('appointmentCreated', {
        appointmentId: createdAppointmentId,
      });
    }

    return appointment;
  }
}
