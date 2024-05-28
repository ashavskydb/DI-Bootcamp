import { useState } from 'react';
import List from './components/List';
import { Todo } from './components/types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <List items={todos} renderItem={(todo) => <div>{todo.text}</div>} />
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
    </div>
  );
}

export default App;