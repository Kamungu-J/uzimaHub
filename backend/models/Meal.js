import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },      
  calories: { type: Number, required: true },  
});

export default mongoose.model("Meal", MealSchema);
