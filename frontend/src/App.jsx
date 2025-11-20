import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import MealLog from "./components/MealLog";
import ExerciseLog from "./components/ExerciseLog";
import Reminder from "./components/Reminder";

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("mh-dark") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("mh-dark", darkMode ? "1" : "0");
    } catch {}
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-100 text-black"}>
      <div className="p-4 max-w-4xl mx-auto">
        {/* Show header + nav only if not on homepage */}
        {location.pathname !== "/" && (
          <>
            <header className="flex flex-col items-center mb-4">
              <div className="flex items-center justify-between w-full max-w-4xl">
                <h1 className="text-3xl sm:text-4xl font-bold">uzimaHub</h1>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
                >
                  {darkMode ? "Light" : "Dark"}
                </button>
              </div>
              <p className="text-lg text-blue-400 mt-1">Track. Nourish. Thrive.</p>
            </header>

            <nav className="mb-6">
              <ul className="flex flex-wrap gap-3 justify-center">
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `${isActive ? "bg-blue-700" : "bg-blue-500"} px-4 py-2 rounded text-white`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/meals"
                    className={({ isActive }) =>
                      `${isActive ? "bg-green-700" : "bg-green-500"} px-4 py-2 rounded text-white`
                    }
                  >
                    Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/exercises"
                    className={({ isActive }) =>
                      `${isActive ? "bg-orange-700" : "bg-orange-500"} px-4 py-2 rounded text-white`
                    }
                  >
                    Exercises
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reminders"
                    className={({ isActive }) =>
                      `${isActive ? "bg-purple-700" : "bg-purple-500"} px-4 py-2 rounded text-white`
                    }
                  >
                    Reminders
                  </NavLink>
                </li>
              </ul>
            </nav>
          </>
        )}

        <main>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
            <Route path="/meals" element={<MealLog darkMode={darkMode} />} />
            <Route path="/exercises" element={<ExerciseLog darkMode={darkMode} />} />
            <Route path="/reminders" element={<Reminder darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
