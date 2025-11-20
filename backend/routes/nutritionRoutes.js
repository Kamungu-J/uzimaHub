import express from "express";
const router = express.Router();

// Mock calorie data
const mockUSDA = {
  apple: 52,
  banana: 89,
  chapati: 120,
  rice: 130,
  ugali: 110,
  sukuma: 25,
  mandazi: 320,
  bread: 75,
  milk: 42,
  egg: 78,
  beans: 127,
  potato: 87,
};

// POST /api/nutrition/get-calories
router.post("/get-calories", (req, res) => {
  const { food } = req.body;
  if (!food) return res.status(400).json({ error: "Food is required" });

  const name = food.toLowerCase();

  const calories =
    mockUSDA[name] ??
    Math.floor(Math.random() * 450) + 50; // fallback for unknown food

  return res.json({ calories });
});

export default router;
