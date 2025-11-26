# 🚀 Employee Task Manager 

A complete Employee & Task Management System built as part of the **Track 2 – Backend Development Assessment**.  
This project includes a **Node.js backend**, **SQLite database**, and a **React (Vite) frontend** with full CRUD functionality.

---

## 📌 Tech Stack

### Backend
- Node.js  
- Express.js  
- Sequelize ORM  
- SQLite (default)

### Frontend
- React (Vite)  
- Fetch API  
- Basic CSS

---

## 📂 Project Structure


employee_task_project/

│

├── backend/

│ ├── src/

│ │ ├── models/

│ │ ├── routes/

│ │ ├── utils/

│ │ └── server.js

│ ├── package.json

│ ├── .env

│
├── frontend/

│ ├── src/

│ │ ├── components/

│ │ ├── App.jsx

│ │ └── main.jsx

│ ├── package.json

│ ├── .env

│

└── README.md

---

# 🛠️ Setup Instructions

## 1️⃣ Backend Setup


cd backend
npm install
npm run migrate
npm run seed
npm run dev

Backend runs at:
👉 http://localhost:4000/api

## 2️⃣ Frontend Setup

Open a NEW PowerShell window:
cd frontend
npm install
npm run dev

Frontend runs at:
👉 http://localhost:5173

Employees API
| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | /api/employees     | Get all employees  |
| POST   | /api/employees     | Create employee    |
| GET    | /api/employees/:id | Get employee by ID |
| PUT    | /api/employees/:id | Update employee    |
| DELETE | /api/employees/:id | Delete employee    |


Example Employee JSON

{
  "name": "Alice",
  "email": "alice@example.com",
  "position": "Developer"
}

Tasks API
| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/tasks     | Get all tasks  |
| POST   | /api/tasks     | Create task    |
| GET    | /api/tasks/:id | Get task by ID |
| PUT    | /api/tasks/:id | Update task    |
| DELETE | /api/tasks/:id | Delete task    |


Example Task JSON

{
  "title": "Build backend",
  "description": "Create employee/task CRUD APIs",
  "status": "in-progress",
  "employeeId": 1
}

<img width="386" height="536" alt="image" src="https://github.com/user-attachments/assets/d1293e95-8c8b-4bb9-bc76-2f444cafa7cd" />



## ⭐ Future Enhancements

JWT Authentication

Pagination & Search

Sorting & Filters

Docker support

Deployment (Render + Netlify)

