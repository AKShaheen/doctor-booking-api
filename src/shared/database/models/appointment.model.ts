import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  slotId: { type: Schema.Types.ObjectId, required: true },
  patientId: { type: Schema.Types.ObjectId, required: true },
  patientName: { type: String, required: true },
  doctorId: { type: Schema.Types.ObjectId, required: true },
  time: { type: Date, required: true },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    default: "scheduled",
  },
});

export const AppointmentModel = model("Appointment", appointmentSchema);
