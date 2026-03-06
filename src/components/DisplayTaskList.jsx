import "./Styles/DisplayTaskList.css";
import Task from "./Task";
import { useTasks } from "../context/GlobalState";
import { useState } from "react";

function DisplayTaskList() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <>
      <div className="display-task-outer">
        <p>STATISTICS</p>
        <hr />

        <div className="statistics-box">
          <div className="statistic">
            <h2 style={{ margin: "0" }}>{totalTasks}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="statistic">
            <h2 style={{ margin: "0", color: "green" }}>{completedTasks}</h2>
            <p>Completed </p>
          </div>

          <div className="statistic">
            <h2 style={{ margin: "0", color: "#c5a84f" }}>{pendingTasks}</h2>
            <p>Pending</p>
          </div>
        </div>

        <p>FILTER TASKS</p>
        <hr />

        <div className="filter-box">
          <button className="filter-btn" onClick={() => setFilter("all")}>
            ALL
          </button>

          <button className="filter-btn" onClick={() => setFilter("completed")}>
            COMPLETED
          </button>

          <button className="filter-btn" onClick={() => setFilter("pending")}>
            PENDING
          </button>
        </div>

        <p>TASK LIST</p>
        <hr />

        <div className="list-box">
          {filteredTasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayTaskList;
