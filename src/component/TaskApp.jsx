import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TaskAppComponent } from "./TaskAppComponent";

const TaskApp = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (task) {
      setTaskList([...tasklist, { id: uuid(), name: task }]);
      setTask("");
      setError("");
    } else {
      setError("Task is empty!");
    }
  };

  const handleDeleteTask = (removeTask) => {
    const removeTaskList = tasklist.filter((task) => task.id !== removeTask);
    setTaskList(removeTaskList);
  };

  const handleClearTask = () => {
    setTaskList([]);
    setError("");
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!task) {
        setError("Task is empty!");
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <>
    <div className="task-container">
    <div className="container">
        <h2>Task App</h2>
        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(event) => setTask(event.target.value)}
              onKeyPress={handleEnterKey}
            />
            <button type="submit " className="submitBtn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {error ? <p className="error">{error}</p> : null}
        </div>

        <div className="list-container">
          <ul>
            {tasklist.map((task) => (
              <TaskAppComponent
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleClearTask={handleClearTask}
              />
            ))}
          </ul>
        </div>
        <div className="clear">
          {tasklist.length > 0 ? (
            <button className="clearBtn" onClick={handleClearTask}>
              Clear Task
            </button>
          ) : null}
        </div>
        </div>
      </div>
    </>
  );
};

export default TaskApp;
