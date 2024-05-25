import { useState } from "react";

export default function TaskDetail({ task, onCompletedStep, onAddStep }) {
  const [newStep, setNewStep] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    newStep && onAddStep(newStep);
    setNewStep("");
  }

  return (
    <>
      <div className="description">{task.description}</div>
      {task.steps && (
        <ol>
          {task.steps.map((s, idx) => (
            <SingleStep
              className={task.progress >= idx ? "completed" : ""}
              onCompletedStep={onCompletedStep}
              idx={idx}
              key={idx}
            >
              {s}
            </SingleStep>
          ))}
        </ol>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="newStep">new Step:</label>
        <input
          type="text"
          name="newStep"
          placeholder="new step in this task ..."
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
        ></input>
      </form>
    </>
  );
}

function SingleStep({ onCompletedStep, idx, className, children }) {
  return (
    <li className={className} key={idx} onClick={() => onCompletedStep(idx)}>
      {children}
    </li>
  );
}
