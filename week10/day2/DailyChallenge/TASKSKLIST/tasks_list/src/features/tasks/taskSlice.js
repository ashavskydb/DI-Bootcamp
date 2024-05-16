import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  days: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      const day = state.days.find((day) => day.date === date);
      if (day) {
        day.tasks.push(task);
      } else {
        state.days.push({ date, tasks: [task] });
      }
    },
    completeTask: (state, action) => {
      const { date, taskId } = action.payload;
      const day = state.days.find((day) => day.date === date);
      if (day) {
        const task = day.tasks.find((task) => task.id === taskId);
        if (task) {
          task.isCompleted = !task.isCompleted;
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const day = state.days.find((day) => day.date === date);
      if (day) {
        day.tasks = day.tasks.filter((task) => task.id !== taskId);
      }
    },
    editTask: (state, action) => {
      const { date, taskId, newTask } = action.payload;
      const day = state.days.find((day) => day.date === date);
      if (day) {
        const task = day.tasks.find((task) => task.id === taskId);
        if (task) {
          if (typeof newTask === 'string') {
            task.task = newTask;
            task.isEditing = true; 
          } else {
            task.isEditing = newTask.isEditing;
          }
        }
      }
    },
  },
});

export const { addTask, completeTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
