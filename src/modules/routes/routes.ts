import express from "express";
import { DoctorAvailabilityController } from "../doctor-availability/controllers/slot.controller";

//TODO Add joi validation

const router = express.Router();
const doctorAvailabilityController = new DoctorAvailabilityController();

router.get("/slots", doctorAvailabilityController.listSlots);

router.post("/slots", doctorAvailabilityController.addSlot);

export { router as doctorAvailabilityRoutes };
