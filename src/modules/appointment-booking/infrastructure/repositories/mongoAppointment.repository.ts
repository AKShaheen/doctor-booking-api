import { Model } from "mongoose";
import { IAppointmentRepository } from "../../domain/repository";
import { Appointment } from "../../domain/entites/appointment";

export class MongoAppointmentRepository implements IAppointmentRepository {
  constructor(private appointmentModel: Model<any>) {}

  async saveAppointment(appointment: Appointment) {
    await this.appointmentModel.create(appointment);
  }
}
