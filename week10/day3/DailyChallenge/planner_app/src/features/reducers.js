import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDay: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask: (state, action) => {
      const { day, taskIndex, newTask } = action.payload;
      state.tasksByDay[day][taskIndex] = newTask;
    },
    deleteTask: (state, action) => {
      const { day, taskIndex } = action.payload;
      state.tasksByDay[day].splice(taskIndex, 1);
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
