import { TodoList } from './todo.js';

const todoList = new TodoList();

todoList.addTask("Complete homework");
todoList.addTask("Go for a run");
todoList.addTask("Buy groceries");


todoList.markAsComplete(0); 
todoList.listAllTasks();

