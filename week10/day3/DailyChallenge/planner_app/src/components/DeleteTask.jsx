import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/reducers';

const DeleteTask = ({ selectedDay, taskIndex, setEditIndex }) => {
    const dispatch = useDispatch();
  
    const handleDeleteTask = () => {
      dispatch(deleteTask({ day: selectedDay, taskIndex }));
      setEditIndex(null);
    };
  
    return (
      <button onClick={handleDeleteTask}>Delete Task</button>
    );
  };
  
  export default DeleteTask;