import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ id: Date.now(), text: task, completed: false });
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const tasks = state.tasksByDate[date];
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(task => task.id !== taskId);
    },
    toggleTask: (state, action) => {
      const { date, taskId } = action.payload;
      const task = state.tasksByDate[date].find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;