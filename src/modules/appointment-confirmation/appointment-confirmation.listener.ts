import { eventEmitter } from '../../shared/events/event-emitter';
import { AppointmentConfirmationService } from './appointment-confirmation.service';

const confirmationService = new AppointmentConfirmationService();

eventEmitter.on(
  'appointmentCreated',
  async (data: { appointmentId: string }) => {
    try {
      await confirmationService.sendNotification(data.appointmentId);
      console.log(
        `Notification sent for appointment ID: ${data.appointmentId}`
      );
    } catch (error) {
      console.error(
        `Failed to send notification for appointment ID: ${data.appointmentId}`,
        error
      );
    }
  }
);
