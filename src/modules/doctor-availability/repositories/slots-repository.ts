import SlotModel from "../models/slot.model";

export class SlotRepository {
  async addSlot(slot: any): Promise<void> {
    const newSlot = new SlotModel(slot);
    await newSlot.save();
  }

  async getSlotsByDoctorId(doctorId: string): Promise<any[]> {
    return SlotModel.find(
      { doctorId },
      { __v: false, _id: false, createdAt: false, updatedAt: false }
    );
  }
}
