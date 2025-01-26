import { Schema, model } from 'mongoose';

export interface IAppointment {
  slotId: string;
  patientId: string;
  patientName: string;
  appointmentTime: Date;
  reservedAt: Date;
  status: string;
}

const appointmentSchema = new Schema<IAppointment>({
  slotId: {
    type: Schema.Types.String,
    required: true,
  },
  patientId: {
    type: Schema.Types.String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: Date,
    required: true,
  },
  reservedAt: {
    type: Schema.Types.Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled',
  },
});

export const AppointmentModel = model<IAppointment>(
  'Appointment',
  appointmentSchema
);
