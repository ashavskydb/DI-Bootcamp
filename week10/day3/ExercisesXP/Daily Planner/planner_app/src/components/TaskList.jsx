import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ date }) => {
  const tasks = useSelector(state => state.tasks.tasksByDate[date] || []);

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} date={date} />
      ))}
    </ul>
  );
};

export default TaskList;