import React, { useState, useEffect } from "react";
import api, { getTodayExercises, saveExercise, deleteExercise } from "../services/api";

export default function ExerciseLog({ darkMode }) {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ type: "", duration: "", calories: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchExercises = async () => {
    try {
      const data = await getTodayExercises();
      setExercises(data);
    } catch {
      alert("Failed to fetch exercises");
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleSave = async () => {
    try {
      if (!newExercise.type || !newExercise.duration || !newExercise.calories) return;
      if (editingId) {
        await api.put(`/exercises/${editingId}`, newExercise);
      } else {
        await saveExercise(newExercise);
      }
      setNewExercise({ type: "", duration: "", calories: "" });
      setEditingId(null);
      fetchExercises();
    } catch {
      alert("Failed to save exercise");
    }
  };

  const handleEdit = (ex) => {
    setNewExercise({ type: ex.type, duration: ex.duration, calories: ex.calories });
    setEditingId(ex._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteExercise(id);
      fetchExercises();
    } catch {
      alert("Failed to delete exercise");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Exercise"
          value={newExercise.type}
          onChange={(e) => setNewExercise({ ...newExercise, type: e.target.value })}
          className="px-3 py-2 rounded border w-full sm:w-auto"
        />
        <input
          type="number"
          placeholder="Duration (min)"
          value={newExercise.duration}
          onChange={(e) => setNewExercise({ ...newExercise, duration: e.target.value })}
          className="px-3 py-2 rounded border w-full sm:w-auto"
        />
        <input
          type="number"
          placeholder="Calories burned"
          value={newExercise.calories}
          onChange={(e) => setNewExercise({ ...newExercise, calories: e.target.value })}
          className="px-3 py-2 rounded border w-full sm:w-auto"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
        >
          {editingId ? "Update Exercise" : "Add Exercise"}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {exercises.length === 0 ? (
          <p className={darkMode ? "text-white" : "text-gray-900"}>
            No exercises logged yet.
          </p>
        ) : (
          exercises.map((ex) => (
            <div
              key={ex._id}
              className={`p-4 rounded shadow ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } flex justify-between items-center`}
            >
              <div>
                <p className="font-semibold">{ex.type}</p>
                <p>{ex.duration} min | {ex.calories} kcal</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(ex)}
                  className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ex._id)}
                  className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
