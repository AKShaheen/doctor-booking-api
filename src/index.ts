import express from "express";
import mongoose from "mongoose";
import { doctorAvailabilityRoutes } from "./modules/doctorAvailability/infrastructure/routes";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/doctor-appointments")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/availability", doctorAvailabilityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
