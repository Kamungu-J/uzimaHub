import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  duration: { type: Number, required: true }, 
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
export default Exercise;
