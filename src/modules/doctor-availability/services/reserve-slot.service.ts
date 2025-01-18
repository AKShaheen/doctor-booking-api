import { SlotRepository } from "../repositories/slots-repository";

export class ReserveSlotService {
  constructor(private readonly slotRepository = new SlotRepository()) {}

  async reserveSlot(slotId: string) {
    const slotData = await this.slotRepository.getSlotById(slotId);
    if (slotData?.isReserved) {
      return false;
    }
    return this.slotRepository.reserveSlotStatus(slotId);
  }
}
