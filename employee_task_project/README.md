# Employee Task Manager — Assessment Demo

**Track:** Backend Development (API + DB + Frontend)  
**Tech stack:** Node.js, Express, Sequelize, SQLite (backend) + React (frontend)

## Features
- REST APIs for **Employees** (CRUD) and **Tasks** (CRUD)
- Task assignment to employees (FK)
- Simple React frontend to create / list employees and tasks
- DB seed and migrate scripts included

## Setup (local, quick)
### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` with:
   ```
   PORT=4000
   DATABASE_URL=sqlite:./data/dev.sqlite
   ```
4. Run migrations: `npm run migrate`
5. Seed sample data (optional): `npm run seed`
6. Start server: `npm run dev` or `npm start`
7. API base: `http://localhost:4000/api`

Endpoints:
- `GET /api/employees` — list employees (with tasks)
- `POST /api/employees` — create employee `{name,email,position}`
- `GET /api/employees/:id`, `PUT /api/employees/:id`, `DELETE /api/employees/:id`
- `GET /api/tasks`, `POST /api/tasks`, `GET /api/tasks/:id`, `PUT /api/tasks/:id`, `DELETE /api/tasks/:id`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create `.env` with `VITE_API_URL=http://localhost:4000/api`
4. Start: `npm run dev`
5. Open: `http://localhost:5173` (Vite default) or as terminal shows.

## Switching to Postgres (if required)
1. Create Postgres DB and set `DATABASE_URL=postgres://user:pass@host:port/dbname`.
2. Install `pg` package: `npm install pg`.
3. Run `npm run migrate` to create tables.

## What to submit
- GitHub repo (public) with:
  - `backend/` and `frontend/` folders
  - `README.md`
  - screenshots or a short screen recording of the app working
- Email body (sample included below) to acknowledge and submit.

## Sample submission email
Subject: Submission — Online Assessment (Track 2 - Backend Development) — [Your Name]

Body:
```
Dear Vasudharini / Team,

Thank you — I acknowledge receipt of the assessment instructions for Track 2 - Backend Development.

I have completed the assignment. The project repository is here: <PASTE_GITHUB_REPO_URL>

Summary:
- Backend: Node.js, Express, Sequelize, SQLite (migrate & seed scripts included)
- Frontend: React (Vite) - simple UI for Employees & Tasks
- Instructions to run are in README.md
- Screenshots and a short demo recording are included in the repo under /docs

Please let me know if you would like a live demo or deployed link.

Regards,
[Your Name]
[Email]
```
