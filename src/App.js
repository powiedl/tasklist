import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import NewTask from "./components/NewTask";

const initialTasks = [
  {
    id: 1,
    name: "Putzen",
    description: "Die Wohnung putzen",
    deadline: "2024-05-26",
    steps: [
      "Staubsaugen",
      "Aufwaschen",
      "Bad putzen",
      "WC putzen",
      "Bettwäsche wechseln",
    ],
    progress: 2,
  },
  {
    id: 2,
    name: "React lernen",
    description: "React lernen",
    deadline: "2024-08-31",
    steps: [
      "Komponente bauen",
      "Props verstehen",
      "Eventhandler verstehen",
      "üben",
      "mehr üben",
      "noch mehr üben",
      "Hooks verstehen",
    ],
    progress: -1,
  },
];

function App() {
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [tasks, setTasks] = useState(initialTasks);
  const [showNewTask, setShowNewTask] = useState(false);

  function handleAddTask(task) {
    setTasks((tasks) => [
      ...tasks,
      { ...task, id: crypto.randomUUID(), steps: [], progress: -1 },
    ]);
    setShowNewTask(null);
  }

  function handleCompletedStep(stepIdx) {
    const curTask = tasks.find((t) => t.id === currentTaskId);
    curTask &&
      stepIdx > curTask.progress &&
      setTasks((tasks) =>
        tasks.map((t) => {
          return t.id !== currentTaskId ? t : { ...t, progress: stepIdx };
        })
      );
  }

  function handleSelectTask(taskId) {
    setCurrentTaskId(taskId);
    setShowNewTask(false);
  }

  function handleAddStep(newStep) {
    if (currentTaskId) {
      const curTask = tasks.find((t) => t.id === currentTaskId);
      curTask &&
        setTasks((tasks) =>
          tasks.map((t) => {
            return t.id !== currentTaskId
              ? t
              : { ...t, steps: [...t.steps, newStep] };
          })
        );
    }
  }

  return (
    <div className="App">
      <TaskList
        tasks={tasks}
        onSelectTask={handleSelectTask}
        selectedTaskId={currentTaskId}
      />
      <button onClick={setShowNewTask}>Add task</button>
      {showNewTask && <NewTask onAddTask={handleAddTask} />}
      {currentTaskId && (
        <TaskDetail
          task={tasks.find((t) => t.id === currentTaskId)}
          onCompletedStep={handleCompletedStep}
          onAddStep={handleAddStep}
        />
        // hier ist wirklich das Ergebnis der Funktion der übergabeparameter und nicht die Funktion selbst!
      )}
    </div>
  );
}

export default App;
