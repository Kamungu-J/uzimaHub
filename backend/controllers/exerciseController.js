import Exercise from '../models/Exercise.js';

export const getExercises = async (req, res) => {
  const exercises = await Exercise.find({ user: req.user.id });
  res.json(exercises);
};

export const addExercise = async (req, res) => {
  const { type, duration, caloriesBurned } = req.body;
  const exercise = new Exercise({ user: req.user.id, type, duration, caloriesBurned });
  await exercise.save();
  res.status(201).json(exercise);
};
