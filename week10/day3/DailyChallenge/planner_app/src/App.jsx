import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import './App.css';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <Provider store={store}>
    <div className="container">
      <h1>Daily Planner</h1>
      <Calendar onSelectDay={setSelectedDay} />
      <TaskList selectedDay={selectedDay} setEditIndex={setEditIndex} />
      <AddTask selectedDay={selectedDay} />
      {editIndex !== null && (
        <>
          <EditTask selectedDay={selectedDay} taskIndex={editIndex} setEditIndex={setEditIndex} />
          <DeleteTask selectedDay={selectedDay} taskIndex={editIndex} setEditIndex={setEditIndex} />
        </>
      )}
    </div>
  </Provider>
);
};

export default App;
