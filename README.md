# Uzimahub

**Catchphrase:** Track. Nourish. Thrive.  

Uzimahub is a personal wellness tracker that helps users monitor their meals, exercises, and reminders in one simple dashboard. Designed to keep track of calories, workouts, and daily habits, Uzimahub supports consistent health management.

## Features (MVP)

- **Homepage**  
  - App name and catchphrase  
  - Overview of what the app does  
  - Navigation to Dashboard, Meals, Exercises, Reminders  
  - Light/Dark mode toggle  

- **Meals**  
  - Add, edit, delete meals  
  - View today’s meals with calories  

- **Exercises**  
  - Add, edit, delete exercises  
  - View today’s exercises with calories burned  

- **Reminders**  
  - Add, edit, delete reminders  
  - View all reminders  

- **Dark/Light Mode**  
  - Consistent styling for readability in both modes  

- **Backend API**  
  - RESTful endpoints for meals, exercises, reminders  
  - Data stored in MongoDB  

Screenshots

![Home Page](path/to/homepage-screenshot.png)  
![Dashboard](path/to/dashboard-screenshot.png)  
![Meals](path/to/meals-screenshot.png)  
![Exercises](path/to/exercises-screenshot.png)  
![Reminders](path/to/reminders-screenshot.png)  

## Live Site

[Visit uzimaHub](https://your-live-url.com)


## Technologies Used

- **Frontend:** React, React Router, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **API Calls:** Axios  

---

## API Endpoints

### Meals
- `POST /api/meals` – Add a meal  
- `GET /api/meals/today` – Get today's meals  
- `PUT /api/meals/:id` – Update a meal  
- `DELETE /api/meals/:id` – Delete a meal  

### Exercises
- `POST /api/exercises` – Add an exercise  
- `GET /api/exercises/today` – Get today's exercises  
- `PUT /api/exercises/:id` – Update an exercise  
- `DELETE /api/exercises/:id` – Delete an exercise  

### Reminders
- `POST /api/reminders` – Add a reminder  
- `GET /api/reminders` – Get all reminders  
- `PUT /api/reminders/:id` – Update a reminder  
- `DELETE /api/reminders/:id` – Delete a reminder  


## Installation & Running

1. **Clone the repo**  
   ```bash
   git clone <repo-url>
   cd <frontend or backend folder>

2. **Install dependencies**
   '''bash
   npm install

3. **Environment Variables**
create a .env in backend
MONGO_URI=<your_mongo_connection_string>
PORT=5000

4. **Start Backend**
'''bash
npm run dev

5. **Start Frontend**
'''bash
npm run dev

6. Open http://localhost:5173 in your browser.