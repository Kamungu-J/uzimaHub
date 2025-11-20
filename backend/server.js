import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nutritionRoutes from "./routes/nutritionRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/nutrition", nutritionRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
