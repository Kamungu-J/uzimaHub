import React, { useEffect, useState } from "react";
import {
  getTodayMeals,
  saveMeal,
  updateMeal,
  deleteMeal,
} from "../services/api";

export default function MealLog({ darkMode }) {
  const [meals, setMeals] = useState([]);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchMeals = async () => {
    try {
      const data = await getTodayMeals();
      setMeals(data);
    } catch (err) {
      console.error("Failed to fetch meals", err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updateMeal(editingId, { name, calories });
        setEditingId(null);
      } else {
        await saveMeal({ name, calories });
      }

      setName("");
      setCalories("");
      fetchMeals();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (meal) => {
    setName(meal.name);
    setCalories(meal.calories);
    setEditingId(meal._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMeal(id);
      fetchMeals();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`p-4 ${darkMode ? "text-white" : "text-black"}`}>
      <h2 className="text-2xl font-bold mb-4">Meals (today)</h2>

      <div className="mb-4 flex flex-wrap gap-2">
        <input
          className={`border p-2 rounded ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black"}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Meal name"
        />

        <input
          className={`border p-2 rounded ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black"}`}
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          {editingId ? "Update Meal" : "Add Meal"}
        </button>
      </div>

      {meals.length === 0 ? (
        <p>No meals logged yet.</p>
      ) : (
        meals.map((m) => (
          <div
            key={m._id}
            className={`flex justify-between items-center mb-2 border-b pb-2 ${
              darkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <span>
              {m.name} — {m.calories} kcal
            </span>

            <div className="flex gap-2">
              <button
                className="bg-yellow-500 text-black px-3 py-1 rounded"
                onClick={() => handleEdit(m)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(m._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
