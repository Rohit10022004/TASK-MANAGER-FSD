# Task Manager App

## Overview
A simple **Full-Stack Task Manager App** where users can create, update, delete, and mark tasks as completed. The app also supports setting due dates and priorities.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)

## Features
✅ Add, edit, delete tasks
✅ Set task priority (Low, Medium, High)
✅ Mark tasks as completed
✅ User authentication (login with JWT)
✅ Simple UI with Tailwind CSS

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Backend Setup
```sh
cd backend
npm install   # Install dependencies
node server.js  # Start the backend server (Runs on port 5000 by default)
```

### 3. Frontend Setup
```sh
cd frontend
npm install   # Install dependencies
npm start     # Start React frontend (Runs on port 3000 by default)
```

## API Endpoints

### Authentication
- `POST /auth/login` - Logs in a user and returns a JWT

### Tasks
- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Project Structure
```
📂 task-manager
 ├── 📂 backend
 │   ├── db.js           # MongoDB connection
 │   ├── server.js       # Main Express server
 │   ├── taskModel.js    # Task Schema
 │   ├── routes.js       # Task API routes
 │   ├── auth.js         # Authentication logic
 │   └── package.json    # Backend dependencies
 ├── 📂 frontend
 │   ├── src
 │   │   ├── App.jsx      # Main React file
 │   │   ├── TaskList.jsx # Task list component
 │   │   ├── TaskForm.jsx # Task form component
 │   │   ├── api.js       # API calls
 │   ├── package.json     # Frontend dependencies
 ├── README.md            # Project documentation
```

## Contributing
Feel free to fork this repository and submit pull requests! 🚀

## License
This project is open-source and available under the **MIT License**.

