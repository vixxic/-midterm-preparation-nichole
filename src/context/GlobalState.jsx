import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState({
    title: "",
    category: "",
    priority: "",
    deadline: "",
  });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        title,
        setTitle,
        category,
        setCategory,
        priority,
        setPriority,
        deadline,
        setDeadline,
        error,
        setError,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
