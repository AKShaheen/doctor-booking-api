import { IEventSubscriber } from "../../../shared/events/IEventSubscriber";
import { ConfirmationService } from "../services/confirmation.service";

export class AppointmentBookedListener {
  constructor(eventSubscriber: IEventSubscriber) {
    const confirmationService = new ConfirmationService();

    eventSubscriber.subscribe("APPOINTMENT_BOOKED", (event) => {
      confirmationService.sendPatientConfirmation({
        patientName: event.patientName,
        doctorName: event.doctorName,
        appointmentTime: event.appointmentTime,
      });
      confirmationService.sendDoctorNotification({
        patientName: event.patientName,
        doctorName: event.doctorName,
        appointmentTime: event.appointmentTime,
      });
    });
  }
}
