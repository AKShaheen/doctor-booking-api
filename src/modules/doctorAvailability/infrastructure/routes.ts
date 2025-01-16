import express from "express";
import { SlotController } from "../application/SlotController";

const router = express.Router();
const slotController = new SlotController();

router.get("/slots", slotController.listSlots);
router.post("/slots", slotController.addSlot);

export { router as doctorAvailabilityRoutes };
