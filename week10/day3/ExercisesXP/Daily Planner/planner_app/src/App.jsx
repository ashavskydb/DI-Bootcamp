import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './ app/store';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <Provider store={store}>
      <div>
        <h1>Daily Planner</h1>
        <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
        <TaskList date={selectedDate} />
        <AddTask date={selectedDate} />
      </div>
    </Provider>
  );
};

export default App;