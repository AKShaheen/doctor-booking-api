import { SlotRepository } from "../repositories/slots-repository";

export class ListSlotsService {
  constructor(private readonly slotRepository = new SlotRepository()) {}
  
  async listSlots(doctorId: string) {
  return this.slotRepository.getSlotsByDoctorId(doctorId);
  }
}
