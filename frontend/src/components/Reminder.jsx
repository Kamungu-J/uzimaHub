import React, { useEffect, useState } from "react";
import api, { getReminders, saveReminder, deleteReminder } from "../services/api";

export default function Reminder({ darkMode }) {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ text: "", time: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchReminders = async () => {
    try {
      const data = await getReminders();
      setReminders(data);
    } catch {
      alert("Failed to fetch reminders");
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const handleSave = async () => {
    try {
      if (!newReminder.text || !newReminder.time) return;
      if (editingId) {
        await api.put(`/reminders/${editingId}`, newReminder);
      } else {
        await saveReminder(newReminder);
      }
      setNewReminder({ text: "", time: "" });
      setEditingId(null);
      fetchReminders();
    } catch {
      alert("Failed to save reminder");
    }
  };

  const handleEdit = (r) => {
    setNewReminder({ text: r.text, time: r.time });
    setEditingId(r._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteReminder(id);
      fetchReminders();
    } catch {
      alert("Failed to delete reminder");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Reminder"
          value={newReminder.text}
          onChange={(e) => setNewReminder({ ...newReminder, text: e.target.value })}
          className="px-3 py-2 rounded border w-full sm:w-auto"
        />
        <input
          type="time"
          value={newReminder.time}
          onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
          className="px-3 py-2 rounded border w-full sm:w-auto"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
        >
          {editingId ? "Update Reminder" : "Add Reminder"}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {reminders.length === 0 ? (
          <p className={darkMode ? "text-white" : "text-gray-900"}>
            No reminders set yet.
          </p>
        ) : (
          reminders.map((r) => (
            <div
              key={r._id}
              className={`p-4 rounded shadow ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } flex justify-between items-center`}
            >
              <div>
                <p className="font-semibold">{r.text}</p>
                <p>{r.time}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(r)}
                  className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(r._id)}
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
