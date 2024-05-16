import { useState } from 'react';

const TaskList = ({ tasks = [], addTask, completeTask, deleteTask, editTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        }
    };

    const handleEditTask = (taskId, newTaskText) => {
        editTask(taskId, newTaskText);
    };

    const toggleEditTask = (taskId) => {
        editTask(taskId, { isEditing: true });
    };

    const saveEditedTask = (taskId, newTaskText) => {
        editTask(taskId, { task: newTaskText, isEditing: false });
    };

    return (
        <div>
            <h3>Tasks for the selected date:</h3>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>New Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => completeTask(task.id)}
                        />
                        {task.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={task.task}
                                    onChange={(e) => handleEditTask(task.id, e.target.value)}
                                />
                                <button onClick={() => saveEditedTask(task.id, task.task)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{task.task}</span>
                                <button onClick={() => toggleEditTask(task.id)}>Edit</button>
                            </>
                        )}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
