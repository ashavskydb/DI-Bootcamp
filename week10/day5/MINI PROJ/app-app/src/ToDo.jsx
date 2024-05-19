import { memo } from "react";

const Todo = ({ todos, addTask, calculation }) => {
  console.log("todo child render");
  return (
    <>
      <h2>Todo: {calculation}</h2>
      <button onClick={addTask}>Add Task</button>
      {todos.map((task, indx) => (
        <p key={indx}>
          {indx} : {task}
        </p>
      ))}
    </>
  );
};

export default memo(Todo);
