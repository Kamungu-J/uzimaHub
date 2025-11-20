import axios from "axios";

export const getCalories = async (query) => {
  try {
    const res = await axios.post("http://localhost:5000/api/nutrition/get-calories", { food: query });
    return res.data;
  } catch (err) {
    console.error("Error fetching calories:", err);
    return null;
  }
};
