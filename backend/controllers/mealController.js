import Meal from '../models/Meal.js';

export const getMeals = async (req, res) => {
  const meals = await Meal.find({ user: req.user.id });
  res.json(meals);
};

export const addMeal = async (req, res) => {
  const { name, calories } = req.body;
  const meal = new Meal({ user: req.user.id, name, calories });
  await meal.save();
  res.status(201).json(meal);
};
