// application/usecases/BookAppointmentUseCase.ts
import { Appointment } from "../../domain/entities/Appointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";

export class BookAppointmentUseCase {
  constructor(
    private slotRepository: SlotRepository,
    private appointmentRepository: AppointmentRepository
  ) {}

  async execute(
    slotId: string,
    patientId: string,
    patientName: string
  ): Promise<Appointment> {
    const slot = await this.slotRepository.getSlotById(slotId);
    if (!slot || !slot.isAvailable) {
      throw new Error("Slot is unavailable");
    }

    const appointment = Appointment.create(slotId, patientId, patientName);

    // Save the appointment and mark the slot as unavailable
    await this.appointmentRepository.saveAppointment(appointment);
    await this.slotRepository.updateSlotAvailability(slotId, false);

    return appointment;
  }
}
