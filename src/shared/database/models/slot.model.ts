import { Schema, model } from 'mongoose';

export interface ISlot {
  doctorId: string;
  doctorName: string;
  cost: number;
  time: Date;
  isReserved: boolean;
}

const slotSchema = new Schema<ISlot>(
  {
    doctorId: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    isReserved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const SlotModel = model<ISlot>('Slot', slotSchema);

export default SlotModel;
