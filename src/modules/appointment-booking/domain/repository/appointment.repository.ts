import { Appointment } from "../entites/appointment";

export interface IAppointmentRepository {
  saveAppointment(appointment: Appointment): Promise<void>;
}
