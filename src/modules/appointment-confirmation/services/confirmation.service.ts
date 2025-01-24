export class ConfirmationService {
  sendPatientConfirmation(details: {
    patientName: string;
    doctorName: string;
    appointmentTime: Date;
  }) {
    console.log(`
      [PATIENT CONFIRMATION] 
      Appointment booked for ${details.patientName}
      With: Dr. ${details.doctorName}
      At: ${details.appointmentTime.toLocaleString()}
      `);
  }

  sendDoctorNotification(details: {
    patientName: string;
    doctorName: string;
    appointmentTime: Date;
  }) {
    console.log(`
      [DOCTOR NOTIFICATION] 
      New appointment with ${details.patientName}
      Scheduled at: ${details.appointmentTime.toLocaleString()}
      `);
  }
}
