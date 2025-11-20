import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// --- Meals ---
export const saveMeal = async (meal) => {
  const res = await api.post("/meals", meal);
  return res.data;
};

export const getTodayMeals = async () => {
  const res = await api.get("/meals/today");
  return res.data;
};

export const updateMeal = async (id, meal) => {
  const res = await api.put(`/meals/${id}`, meal);
  return res.data;
};

export const deleteMeal = async (id) => {
  const res = await api.delete(`/meals/${id}`);
  return res.data;
};

// --- Exercises ---
export const saveExercise = async (exercise) => {
  const res = await api.post("/exercises", exercise);
  return res.data;
};

export const getTodayExercises = async () => {
  const res = await api.get("/exercises/today");
  return res.data;
};

export const updateExercise = async (id, exercise) => {
  const res = await api.put(`/exercises/${id}`, exercise);
  return res.data;
};

export const deleteExercise = async (id) => {
  const res = await api.delete(`/exercises/${id}`);
  return res.data;
};

// --- Reminders ---
export const saveReminder = async (reminder) => {
  const res = await api.post("/reminders", reminder);
  return res.data;
};

export const getReminders = async () => {
  const res = await api.get("/reminders");
  return res.data;
};

export const updateReminder = async (id, reminder) => {
  const res = await api.put(`/reminders/${id}`, reminder);
  return res.data;
};

export const deleteReminder = async (id) => {
  const res = await api.delete(`/reminders/${id}`);
  return res.data;
};

export default api;
