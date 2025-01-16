import { Request, Response } from "express";
import { SlotService } from "../domain/SlotService";
import { CreateSlotDTO } from "../domain/types";

export class SlotController {
  private slotService: SlotService;

  constructor() {
    this.slotService = new SlotService();
  }

  listSlots = async (_req: Request, res: Response): Promise<void> => {
    try {
      const slots = await this.slotService.listSlots();
      res.json(slots);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch slots" });
    }
  };

  addSlot = async (req: Request, res: Response): Promise<void> => {
    try {
      const slotData: CreateSlotDTO = {
        time: new Date(req.body.time),
        doctorName: req.body.doctorName,
        cost: req.body.cost,
      };
      const slot = await this.slotService.addSlot(slotData);
      res.status(201).json(slot);
    } catch (error) {
      res.status(400).json({ error: "Failed to create slot" });
    }
  };
}
