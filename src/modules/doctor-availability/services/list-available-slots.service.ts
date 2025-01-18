import { SlotRepository } from "../repositories/slots-repository";

export class ListAvailableSlotsService {
  constructor(private readonly slotRepository = new SlotRepository()) {}

  async listAvailableSlots() {
    return this.slotRepository.getAvailableSlots();
  }
}
