import axios from 'axios';

export const getNutrition = async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.post(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      { query },
      {
        headers: {
          'x-app-id': process.env.NUTRITIONIX_APP_ID,
          'x-app-key': process.env.NUTRITIONIX_APP_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    const food = response.data.foods[0];
    res.json({
      name: food.food_name,
      calories: food.nf_calories,
      protein: food.nf_protein,
      fat: food.nf_total_fat,
      carbs: food.nf_total_carbohydrate
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch nutrition data' });
  }
};
