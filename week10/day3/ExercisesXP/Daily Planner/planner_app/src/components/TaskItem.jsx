import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../slices/tasksSlice';

const TaskItem = ({ date, task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ date, taskId: task.id, newText }));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            className={task.completed ? 'completed' : ''}
            onClick={() => dispatch(toggleTask({ date, taskId: task.id }))}
          >
            {task.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch(deleteTask({ date, taskId: task.id }))}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;