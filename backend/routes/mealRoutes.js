import express from "express";
import Meal from "../models/Meal.js";

const router = express.Router();

// CREATE MEAL
router.post("/", async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.json(meal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save meal" });
  }
});

// GET TODAY MEALS
router.get("/today", async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const meals = await Meal.find({
    date: { $gte: start, $lte: end }
  });

  res.json(meals);
});

// UPDATE MEAL
router.put("/:id", async (req, res) => {
  try {
    const updated = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// DELETE MEAL
router.delete("/:id", async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;
