import mongoose, { Schema, Document } from "mongoose";
import { ISlot } from "../../domain/types";

export interface ISlotDocument extends Omit<ISlot, "id">, Document {
  id: string;
}

const SlotSchema = new Schema<ISlotDocument>(
  {
    id: { type: String, required: true, unique: true },
    time: { type: Date, required: true },
    doctorId: { type: String, required: true },
    doctorName: { type: String, required: true },
    isReserved: { type: Boolean, default: false },
    cost: { type: Number, required: true },
  },
  { timestamps: true }
);

export const SlotModel = mongoose.model<ISlotDocument>("Slot", SlotSchema);
