import express from "express";
import Reminder from "../models/Reminder.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const reminder = await Reminder.create(req.body);
    res.json(reminder);
  } catch {
    res.status(500).json({ error: "Could not save reminder" });
  }
});

// Get all
router.get("/", async (req, res) => {
  const reminders = await Reminder.find();
  res.json(reminders);
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(reminder);
  } catch {
    res.status(500).json({ error: "Could not update reminder" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.json({ message: "Reminder deleted" });
  } catch {
    res.status(500).json({ error: "Could not delete reminder" });
  }
});

export default router;
