import { Document, Model } from "mongoose";
import {
  Appointment,
  IAppointmentRepository,
} from "../../../core/ports/IAppointment.repository";

interface MongoAppointmentDocument extends Appointment, Document {}

export class MongoAppointmentRepository implements IAppointmentRepository {
  constructor(private readonly model: Model<MongoAppointmentDocument>) {}

  async findUpcoming(doctorId: string): Promise<Appointment[]> {
    return this.model
      .find({
        doctorId,
        time: { $gte: new Date() },
        status: "scheduled",
      })
      .lean()
      .exec();
  }

  async updateStatus(
    appointmentId: string,
    status: "completed" | "cancelled"
  ): Promise<void> {
    await this.model
      .findByIdAndUpdate(appointmentId, { status }, { new: true })
      .exec();
  }
}
