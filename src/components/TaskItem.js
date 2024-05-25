export default function TaskItem({ task, selected, onClick }) {
  return (
    <li
      onClick={() => onClick(task.id)}
      className={`task ${
        task.progress + 1 >= task.steps.length ? "completed" : ""
      } ${selected ? "selected" : ""} 
      ${new Date(task.deadline) < new Date() ? "overdue" : ""} `}
    >
      {task.name} ({task.steps.length} Schritte)
    </li>
  );
}
