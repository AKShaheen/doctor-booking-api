export interface ISlotRepository {
  getSlotById(slotId: string): Promise<any>;
  updateSlotAvailability(slot: any): Promise<void>;
}
