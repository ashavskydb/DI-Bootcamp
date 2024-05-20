import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../features/reducers';

const EditTask = ({ selectedDay, taskIndex, setEditIndex }) => {
    const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
    const [task, setTask] = useState(tasks[taskIndex] || '');
    const dispatch = useDispatch();
  
    const handleEditTask = () => {
      dispatch(editTask({ day: selectedDay, taskIndex, newTask: task }));
      setEditIndex(null);
    };
  
    return (
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleEditTask}>Save</button>
      </div>
    );
  };
  
  export default EditTask;