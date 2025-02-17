function TaskList({ tasks, setTasks }) {
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <li key={task._id} className="p-2 border rounded mb-2 flex justify-between">
          <span>{task.title}</span>
          <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
