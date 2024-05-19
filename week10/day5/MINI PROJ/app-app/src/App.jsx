import { useState, useCallback, useMemo } from "react";
import Todo from "./Todo";

const ParentComponent = () => {
  const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2"]);
  const [count, setCount] = useState(0);

  const addTask = useCallback(() => {
    setTasks((prevTasks) => [...prevTasks, `New Task ${prevTasks.length + 1}`]);
  }, []);

  const calculation = useMemo(() => {
    return tasks.length * 2;
  }, [tasks]);

  return (
    <>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <Todo todos={tasks} addTask={addTask} calculation={calculation} />
    </>
  );
};

export default ParentComponent;
