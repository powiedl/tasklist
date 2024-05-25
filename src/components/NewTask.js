import { useState } from "react";
import StepList from "./StepList";
export default function NewTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState(
    new Date().toISOString().split("T")[0]
  );
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!taskName || !taskDescription) return;
    onAddTask({
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName"></label>
      <input
        type="text"
        name="taskName"
        placeholder="name of task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <label htmlFor="taskDescription"></label>
      <input
        type="text"
        name="taskDescription"
        placeholder="description of task..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></input>
      <label htmlFor="taskDeadline"></label>
      <input
        type="date"
        name="taskDeadline"
        placeholder="deadline of task..."
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
}
