import { Schema, model } from "mongoose";
import { AppointmentStatus } from "../../infrastructure/types";

export interface IAppointment {
  slotId: string;
  patientId: string;
  patientName: string;
  reservedAt: Date;
  status: AppointmentStatus;
}
const appointmentSchema = new Schema<IAppointment>(
  {
    slotId: {
      type: String,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(AppointmentStatus),
      default: AppointmentStatus.PENDING,
    },
  },
  {
    timestamps: { createdAt: "reservedAt", updatedAt: true },
  }
);

const AppointmentModel = model<IAppointment>("Appointment", appointmentSchema);

export default AppointmentModel;
