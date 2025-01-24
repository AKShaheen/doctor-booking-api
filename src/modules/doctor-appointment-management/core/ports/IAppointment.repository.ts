export interface IAppointmentRepository {
  findUpcoming(doctorId: string): Promise<Appointment[]>;
  updateStatus(
    appointmentId: string,
    status: "completed" | "cancelled"
  ): Promise<void>;
}

export type Appointment = {
  id: string;
  slotId: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  time: Date;
  status: "scheduled" | "completed" | "cancelled";
};
