document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const listTasks = document.querySelector('.listTasks');
    const clearButton = document.getElementById('clearButton');
    let tasks = [];
  
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      addTask();
    });

    clearButton.addEventListener('click', function() {
        clearTasks();
      });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const task = {
          task_id: tasks.length,
          text: taskText,
          done: false
        };
        tasks.push(task);
        renderTask(task);
        taskInput.value = '';
      }
    }
  
    function renderTask(task) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
  
      const deleteBtn = document.createElement('span');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
      deleteBtn.addEventListener('click', function() {
        deleteTask(task.task_id);
      });
  
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `task-${task.task_id}`);
      checkbox.addEventListener('change', function() {
        task.done = checkbox.checked;
        updateTaskStyle(taskElement, task.done);
      });
  
      const label = document.createElement('label');
      label.setAttribute('for', `task-${task.task_id}`);
      label.textContent = task.text;
  
      taskElement.appendChild(deleteBtn);
      taskElement.appendChild(checkbox);
      taskElement.appendChild(label);
  
      listTasks.appendChild(taskElement);
    }
  
    function updateTaskStyle(taskElement, done) {
      if (done) {
        taskElement.style.textDecoration = 'line-through';
        taskElement.style.color = 'red';
      } else {
        taskElement.style.textDecoration = 'none';
        taskElement.style.color = 'black';
      }
    }
  
    function deleteTask(taskId) {
      tasks = tasks.filter(task => task.task_id !== taskId);
      renderTasks();
    }
  
    function renderTasks() {
      listTasks.innerHTML = '';
      tasks.forEach(task => {
        renderTask(task);
      });
    }

    function clearTasks() {
        tasks = [];
        renderTasks();
      }
  

  });
  