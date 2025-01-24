import { Appointment } from "../../domain/entites/appointment";
import {
  IAppointmentRepository,
  ISlotRepository,
} from "../../domain/repository";
export class BookAppointmentUseCase {
  constructor(
    private slotRepository: ISlotRepository,
    private appointmentRepository: IAppointmentRepository,
    private confirmationService: { sendConfirmation: (details: any) => void }
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

    const appointment = new Appointment(
      new Date().getTime().toString(),
      slotId,
      patientId,
      patientName,
      new Date()
    );

    // Save the appointment and mark the slot as unavailable
    await this.appointmentRepository.saveAppointment(appointment);
    await this.slotRepository.updateSlotAvailability(slotId);

    this.confirmationService.sendConfirmation({
      patientName,
      doctorName: slot.doctorName,
      time: slot.time,
    });

    return appointment;
  }
}
