import { Request, Response } from 'express';
import { CreateSlotDTO } from './dtos';
import { AddSlotService, ListSlotsService } from '../services';

export class DoctorAvailabilityController {
  constructor(
    private readonly addSlotService = new AddSlotService(),
    private readonly listSlotService = new ListSlotsService()
  ) {}

  public async addSlot(req: Request, res: Response): Promise<void> {
    try {
      const slotData: CreateSlotDTO = req.body;

      const slot = await this.addSlotService.addSlot(slotData);
      res.status(201).json(slot);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async listSlots(req: Request, res: Response): Promise<void> {
    try {
      const doctorId = req.query.doctorId as string;
      const slots = await this.listSlotService.listSlots(doctorId);
      res.json(slots);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch slots' });
    }
  }
}
