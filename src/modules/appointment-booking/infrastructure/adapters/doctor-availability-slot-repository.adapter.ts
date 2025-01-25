import { ListAvailableSlotsService } from '../../../doctor-availability/services/list-available-slots.service';
import { ReserveSlotService } from '../../../doctor-availability/services/reserve-slot.service';
import { ISlotsRepository } from '../../domain/repository';

export class DoctorAvailabilitySlotRepositoryAdapter
  implements ISlotsRepository
{
  constructor(
    private reserveSlotService = new ReserveSlotService(),
    private listAvailableSlotsService = new ListAvailableSlotsService()
  ) {}

  async reserveSlot(slotId: string): Promise<Boolean> {
    const result = await this.reserveSlotService.reserveSlot(slotId);
    return result;
  }

  async getAvailableSlots(): Promise<any[]> {
    return this.listAvailableSlotsService.listAvailableSlots();
  }
}
