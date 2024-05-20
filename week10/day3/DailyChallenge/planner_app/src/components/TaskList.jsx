import { useSelector } from 'react-redux';

const TaskList = ({ selectedDay, setEditIndex }) => {
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <div>
            <button onClick={() => setEditIndex(index)}>Edit</button>
            <button onClick={() => setEditIndex(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;