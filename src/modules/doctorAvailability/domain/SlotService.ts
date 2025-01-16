import { v4 as uuidv4 } from "uuid";
import { SlotModel } from "../infrastructure/models/Slot";
import { ISlot, CreateSlotDTO } from "./types";

export class SlotService {
  private readonly DOCTOR_ID = uuidv4(); // Single doctor system

  async listSlots(): Promise<ISlot[]> {
    return await SlotModel.find();
  }

  async addSlot(slotData: CreateSlotDTO): Promise<ISlot> {
    const slot = new SlotModel({
      id: uuidv4(),
      doctorId: this.DOCTOR_ID,
      ...slotData,
      isReserved: false,
    });
    return await slot.save();
  }

  async getAvailableSlots(): Promise<ISlot[]> {
    return await SlotModel.find({ isReserved: false });
  }
}
