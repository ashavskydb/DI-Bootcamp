import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/reducers';

const AddTask = ({ selectedDay }) => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      dispatch(addTask({ day: selectedDay, task }));
      setTask('');
    };
  
    return (
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
  
  export default AddTask;