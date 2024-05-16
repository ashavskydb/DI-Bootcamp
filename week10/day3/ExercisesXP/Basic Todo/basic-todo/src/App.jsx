import { Provider } from 'react-redux';
import store from './app/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
