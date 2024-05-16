import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, completeTask, deleteTask, editTask } from './taskSlice';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const day = state.tasks.days.find((day) => day.date === date.toISOString().split('T')[0]);
    return day ? day.tasks : [];
  });

  const handleAddTask = (task) => {
    dispatch(addTask({ date: date.toISOString().split('T')[0], task: { id: uuidv4(), task, isCompleted: false } }));
  };

  const handleCompleteTask = (taskId) => {
    dispatch(completeTask({ date: date.toISOString().split('T')[0], taskId }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ date: date.toISOString().split('T')[0], taskId }));
  };

  const handleEditTask = (taskId, newTask) => {
    dispatch(editTask({ date: date.toISOString().split('T')[0], taskId, newTask }));
  };

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Choose the date:</h2>
      <Calendar onChange={handleChange} value={date} />
      <TaskList
        tasks={tasks}
        addTask={handleAddTask}
        completeTask={handleCompleteTask}
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
      />
    </div>
  );
};

export default CalendarComponent;
