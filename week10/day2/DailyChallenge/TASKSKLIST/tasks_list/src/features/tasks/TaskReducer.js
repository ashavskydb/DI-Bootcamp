import { v4 as uuidv4 } from "uuid";

export const ADD_TASK = 'add_task'
export const COMPLETE_TASK = 'complete_task'
export const DELETE_TASK = 'delete_task'
export const EDIT_TASK = 'edit_task'


const initialState = {

    tasks: [{ id: uuidv4(), task: 'John', isCompleted: false, isEditing: false, date: '2024-05-14'}]
}

export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                days: state.days.map(day =>
                    day.date === action.payload.date
                        ? {
                            ...day,
                            tasks: [...day.tasks, { id: uuidv4(), task: action.payload.task, isCompleted: false, isEditing: false }]
                        }
                        : day
                )
            };
        case COMPLETE_TASK:
            return {
                ...state,
                days: state.days.map(day =>
                    day.date === action.payload.date
                        ? {
                            ...day,
                            tasks: day.tasks.map(task =>
                                task.id === action.payload.taskId
                                    ? { ...task, isCompleted: !task.isCompleted }
                                    : task
                            )
                        }
                        : day
                )
            };
        case DELETE_TASK:
            return {
                ...state,
                days: state.days.map(day =>
                    day.date === action.payload.date
                        ? {
                            ...day,
                            tasks: day.tasks.filter(task => task.id !== action.payload.taskId)
                        }
                        : day
                )
            };
        case EDIT_TASK:
            return {
                ...state,
                days: state.days.map(day =>
                    day.date === action.payload.date
                        ? {
                            ...day,
                            tasks: day.tasks.map(task =>
                                task.id === action.payload.taskId
                                    ? { ...task, task: action.payload.newTask }
                                    : task
                            )
                        }
                        : day
                )
            };
        default:
            return state;
    }
};
