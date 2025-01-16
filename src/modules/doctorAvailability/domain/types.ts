import { BaseEntity } from "../../../types/common";

export interface ISlot extends BaseEntity {
  time: Date;
  doctorId: string;
  doctorName: string;
  isReserved: boolean;
  cost: number;
}

export interface CreateSlotDTO {
  time: Date;
  doctorName: string;
  cost: number;
}
