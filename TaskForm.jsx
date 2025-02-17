import { useState } from "react";

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = { title };
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks((prev) => [...prev, data]);
    setTitle("");
  };

  return (
    <form onSubmit={addTask} className="mb-4">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task" 
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-2">Add Task</button>
    </form>
  );
}

export default TaskForm;
