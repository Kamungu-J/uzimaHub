import express from "express";
import Exercise from "../models/Exercise.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.json(exercise);
  } catch {
    res.status(500).json({ error: "Could not save exercise" });
  }
});

// Get all for today
router.get("/today", async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const exercises = await Exercise.find({ date: { $gte: start, $lte: end } });
  res.json(exercises);
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const ex = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(ex);
  } catch {
    res.status(500).json({ error: "Could not update exercise" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({ message: "Exercise deleted" });
  } catch {
    res.status(500).json({ error: "Could not delete exercise" });
  }
});

export default router;
