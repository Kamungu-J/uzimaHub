import React from "react";
import { NavLink } from "react-router-dom";
import { FaAppleAlt, FaDumbbell, FaBell } from "react-icons/fa";

export default function HomePage({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      {/* existing content */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white mb-6"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    
      {/* HERO */}
      <h1 className="text-5xl font-extrabold mb-3 tracking-wide text-blue-600 dark:text-blue-300">
        uzimaHub
      </h1>

      <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
        Track. Nourish. Thrive.
      </p>

      {/* INTRO */}
      <p className="max-w-2xl mb-12 text-lg text-gray-600 dark:text-gray-400">
        Stay in control of your wellness journey. Log meals, record workouts, set reminders 
        and monitor your daily progress — all from one clean, simple dashboard.
      </p>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14 w-full max-w-4xl">

        {/* Meals */}
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <FaAppleAlt className="text-4xl mx-auto mb-3 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Track Meals</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Log daily calories & monitor your nutrition patterns.
          </p>
        </div>

        {/* Exercises */}
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <FaDumbbell className="text-4xl mx-auto mb-3 text-orange-500" />
          <h3 className="text-xl font-semibold mb-2">Record Exercises</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Track workouts and calories burned with ease.
          </p>
        </div>

        {/* Reminders */}
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <FaBell className="text-4xl mx-auto mb-3 text-purple-500" />
          <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Set notifications for hydration, meals & wellness habits.
          </p>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <nav className="flex flex-wrap justify-center gap-4 text-lg font-medium">
        <NavLink
          to="/dashboard"
          className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/meals"
          className="px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
        >
          Meals
        </NavLink>

        <NavLink
          to="/exercises"
          className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
        >
          Exercises
        </NavLink>

        <NavLink
          to="/reminders"
          className="px-5 py-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
        >
          Reminders
        </NavLink>
      </nav>

    </div>
  );
}
