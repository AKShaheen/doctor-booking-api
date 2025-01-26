import moment from 'moment';
import { CreateSlotDTO } from '../controllers/dtos';
import { SlotRepository } from '../repositories/slots-repository';

export class AddSlotService {
  constructor(private readonly slotRepository = new SlotRepository()) {}

  async addSlot(slotData: CreateSlotDTO) {
    const validDate = moment(
      slotData.time,
      'DD/MM/YYYY hh:mm a',
      'Africa/Cairo'
    ).toDate();
    console.log(validDate);
    slotData.time = validDate;
    return this.slotRepository.addSlot(slotData);
  }
}
