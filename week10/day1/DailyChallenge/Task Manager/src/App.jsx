import React from 'react';
import { useReducer, useState, useContext, useRef } from "react";
import './App.css';
import './ButtonStyles.css';

const TaskContext = React.createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }] };
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] =useContext(TaskContext);
  const [todoText, setTodoText] = useState("");
  const editInputRef = useRef();


  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = id => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleEditTodo = (id, text) => {
    dispatch({ type: 'EDIT_TODO', id, text });
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'active') return !todo.completed;
    return true;
  });


  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAddTodo} className="button">Add Task</button>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input 
              ref={editInputRef}
              defaultValue={todo.text}
              onBlur={() => handleEditTodo(todo.id, editInputRef.current.value)}
              className="edit-input" 
            />
           <button onClick={() => toggleTodo(todo.id)} className="button toggle-button">Change</button>
           <button onClick={() => handleRemoveTodo(todo.id)} className="button button-remove">Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({type: 'SET_FILTER', filter: 'all'})} className={`button filter-button filter-button-all ${state.filter === 'all' ? 'active' : ''}`}>All</button>
      <button onClick={() => dispatch({type: 'SET_FILTER', filter: 'completed'})} className={`button filter-button filter-button-completed ${state.filter === 'completed' ? 'active' : ''}`}>Completed</button>
      <button onClick={() => dispatch({type: 'SET_FILTER', filter: 'active'})} className={`button filter-button filter-button-active ${state.filter === 'active' ? 'active' : ''}`}>Active</button>
    </div>
  );
}


function App() {
    const[state, dispatch] = useReducer(todoReducer, {todos: [], filter: 'all'});

  return (
    <TaskContext.Provider value={[state, dispatch]}>
    <div className="App">
      <TodoList />
    </div>
    </TaskContext.Provider>
  );
}

export default App;
