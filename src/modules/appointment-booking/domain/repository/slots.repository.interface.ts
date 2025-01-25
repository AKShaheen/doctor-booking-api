export interface ISlotsRepository {
  reserveSlot(slotId: string): Promise<Boolean>;
  getAvailableSlots(): Promise<any[]>;
}
