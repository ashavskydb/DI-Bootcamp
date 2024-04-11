
export class TodoList {
    constructor() {
        this.todos = [];
    }
    addTask(task) {
        this.tasks.push({ task, completed: false });
    }
    markAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
          this.tasks[index].completed = true;
        } else {
          console.error("Invalid task index.");
        }
      }
    
      listAllTasks() {
        console.log("Todo List:");
        this.tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task.task} - ${task.completed ? "Complete" : "Incomplete"}`);
        });
      }
    }

    export class TodoList {
        
      }