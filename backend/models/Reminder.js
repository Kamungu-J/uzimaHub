import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Reminder = mongoose.model("Reminder", reminderSchema);
export default Reminder;
