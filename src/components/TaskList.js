import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onSelectTask, selectedTaskId }) {
  return (
    <>
      <ul>
        {tasks.map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            onClick={onSelectTask}
            selected={t.id === selectedTaskId}
          />
        ))}
      </ul>
    </>
  );
}
