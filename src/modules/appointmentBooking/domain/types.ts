import { BaseEntity } from "../../../types/common";

export interface IAppointment extends BaseEntity {
  slotId: string;
  patientId: string;
  patientName: string;
  reservedAt: Date;
  status: AppointmentStatus;
}

export enum AppointmentStatus {
  SCHEDULED = "scheduled",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface CreateAppointmentDTO {
  slotId: string;
  patientId: string;
  patientName: string;
}
