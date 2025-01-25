import SlotModel, { ISlot } from '../../../shared/database/models/slot.model';

export class SlotRepository {
  async addSlot(slot: any) {
    const newSlot = new SlotModel(slot);
    return newSlot.save();
  }

  async getSlotsByDoctorId(doctorId: string): Promise<any[]> {
    return SlotModel.find(
      { doctorId },
      { __v: false, _id: false, createdAt: false, updatedAt: false }
    );
  }

  async getAvailableSlots(): Promise<any[]> {
    return SlotModel.find(
      { isReserved: false },
      { time: true, doctorName: true, cost: true }
    );
  }

  async getSlotById(slotId: string): Promise<ISlot | null> {
    const slotData = await SlotModel.findOne(
      { _id: slotId },
      {
        isReserved: true,
        time: true,
        doctorName: true,
        cost: true,
      }
    );
    return slotData ? slotData : null;
  }

  async reserveSlotStatus(slotId: string) {
    return SlotModel.updateOne({ _id: slotId }, { isReserved: true });
  }
}
