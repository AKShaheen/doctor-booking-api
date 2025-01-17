import { CreateSlotDTO } from "../controllers/dtos";
import { SlotRepository } from "../repositories/slots-repository";

export class AddSlotService {
  constructor(private readonly slotRepository = new SlotRepository()) {}

  async addSlot(slotData: CreateSlotDTO) {
    return this.slotRepository.addSlot(slotData);
  }
}
