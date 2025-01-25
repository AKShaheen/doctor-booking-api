import { SlotRepository } from '../repositories/slots-repository';

export class ReserveSlotService {
  constructor(private readonly slotRepository = new SlotRepository()) {}

  async reserveSlot(slotId: string) {
    try {
      const slotData = await this.slotRepository.getSlotById(slotId);
      if (slotData?.isReserved) {
        return false;
      }
      await this.slotRepository.reserveSlotStatus(slotId);

      return true;
    } catch (error) {
      return false;
    }
  }
}
