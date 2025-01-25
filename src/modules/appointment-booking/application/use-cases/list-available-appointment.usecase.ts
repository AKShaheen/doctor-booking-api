import { ISlotsRepository } from '../../domain/repository';
export class ListAvailableAppointmentsUseCase {
  constructor(private slotsRepository: ISlotsRepository) {}

  async execute(): Promise<any[]> {
    return this.slotsRepository.getAvailableSlots();
  }
}
