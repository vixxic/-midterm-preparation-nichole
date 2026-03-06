import "./Styles/FormTask.css";
import { useTasks } from "../context/GlobalState";
import { useEffect, useState } from "react";

function FormTask() {
  const {
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
  } = useTasks();

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    setError({
      title: !title ? "Title is required" : "",
      category: !category ? "Category must be selected" : "",
      priority: !priority ? "Priority must be chosen" : "",
      deadline: !deadline ? "Deadline is required" : "",
    });
  }, [title, category, priority, deadline, submitted]);

  const handleAddTask = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!title || !category || !priority || !deadline) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      deadline,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setCategory("");
    setPriority("");
    setDeadline("");

    setError({
      title: "",
      category: "",
      priority: "",
      deadline: "",
    });

    setSubmitted(false);
  };

  return (
    <div className="form-task-outer">
      <p>ADD NEW TASK</p>
      <hr />
      <form className="form" onSubmit={handleAddTask}>
        <label>TASK TITLE</label>
        <input
          type="text"
          placeholder="e.g.Study React"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <p className="error">{error.title}</p>}

        <label>CATEGORY</label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category...</option>
          <option value="work">Work</option>
          <option value="school">Study</option>
          <option value="Health">Health</option>
        </select>
        {error.category && <p className="error">{error.category}</p>}

        <p>PRIORITY</p>
        <div className="priority-con">
          <div className="priority-box">
            <label>
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={(e) => setPriority(e.target.value)}
              />
              Low
            </label>

            <label>
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={priority === "medium"}
                onChange={(e) => setPriority(e.target.value)}
              />
              Medium
            </label>

            <label>
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={(e) => setPriority(e.target.value)}
              />
              High
            </label>
          </div>
        </div>
        {error.priority && <p className="error">{error.priority}</p>}

        <label>DEADLINE</label>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        {error.deadline && <p className="error">{error.deadline}</p>}

        <button type="submit" className="add-button">
          + ADD TASK
        </button>
      </form>
    </div>
  );
}

export default FormTask;
