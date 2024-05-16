import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/tasksSlice';

const AddTask = ({ date }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ date, task: text }));
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;