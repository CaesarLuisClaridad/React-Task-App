import React from "react";

export const TaskAppComponent = ({task, handleDeleteTask}) => {
  return (
    <div>
      <li>
        <span>{task.name}</span>

        <div className="listBtn">
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      </li>
    </div>
  );
};
