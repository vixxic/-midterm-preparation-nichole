import "./styles/Task.css";
import { useTasks } from "../context/GlobalState";
import { FaCheck } from "react-icons/fa";

function Task({ task }) {
  const { tasks, setTasks } = useTasks();

  const handleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t,
    );
    setTasks(updatedTasks);
  };

  const handleDelete = () => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  const priorityColor =
    task.priority === "low"
      ? "#4CAF50"
      : task.priority === "medium"
        ? "#FFC107"
        : "#F44336";

  const bgPriorityColor =
    task.priority === "low"
      ? "#ecf5eb"
      : task.priority === "medium"
        ? "#fff8e1"
        : "#fce4ec";

  return (
    <div className={`task-outer ${task.completed ? "completed" : ""}`}>
      <div
        className="color-priority"
        style={{ backgroundColor: priorityColor }}
      ></div>

      <div className="task-inner">
        <h3>
          {task.completed && <FaCheck style={{ marginRight: "6px" }} />}
          {task.title}
        </h3>

        <div className="task-des">
          <div className="task-des-category">{task.category}</div>

          <div
            className="task-des-priority"
            style={{
              backgroundColor: bgPriorityColor,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div
              className="priority-circle"
              style={{
                backgroundColor: priorityColor,
                padding: "0",
              }}
            ></div>
            {task.priority}
          </div>

          <div className="task-des-due">{task.deadline}</div>
        </div>

        <div>
          <button className="task-btn complete" onClick={handleComplete}>
            COMPLETE
          </button>
          <button className="task-btn delete" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
