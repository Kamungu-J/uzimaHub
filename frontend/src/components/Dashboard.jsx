import React, { useEffect, useState } from "react";
import { getTodayMeals, getTodayExercises } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [meals, setMeals] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalBurned, setTotalBurned] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const mealsData = await getTodayMeals();
        const exData = await getTodayExercises();
        const mealsArr = mealsData || [];
        const exArr = exData || [];
        setMeals(mealsArr);
        setExercises(exArr);
        setTotalCalories(mealsArr.reduce((s, m) => s + (m.calories || 0), 0));
        setTotalBurned(exArr.reduce((s, e) => s + (e.calories || 0), 0));
      } catch (err) {
        console.error(err);
        setMeals([]);
        setExercises([]);
        setTotalCalories(0);
        setTotalBurned(0);
      }
    };
    fetch();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Dashboard 📊</h2>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 text-center">
        <div className="text-lg">Total Calories Consumed</div>
        <div className="text-3xl font-semibold">{totalCalories} kcal</div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 text-center">
        <div className="text-lg">Total Calories Burned</div>
        <div className="text-3xl font-semibold">{totalBurned} kcal</div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
        <h3 className="text-lg font-semibold text-center mb-3">Meals (today)</h3>
        {meals.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">No meals logged yet.</p>
        ) : (
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={meals}>
                <XAxis dataKey="query" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calories" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
