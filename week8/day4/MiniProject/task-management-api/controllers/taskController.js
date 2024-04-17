const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, './data/tasks.json');

const getTasks = (req, res) => {
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Server Error' });
      }
      res.json(JSON.parse(data));
    });
  };

  const getTaskById = (req, res) => {
    const taskId = req.params.id;
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Server Error' });
        }
        const tasks = JSON.parse(data);
        const task = tasks.find(task => task.id === taskId);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
      });
    };

    const createTask = (req, res) => {
        const newTask = req.body;
        fs.readFile(tasksFilePath, 'utf8', (err, data) => {
            if (err) {
              return res.status(500).json({ error: 'Server Error' });
            }
            const tasks = JSON.parse(data);
            newTask.id = Date.now().toString();
            tasks.push(newTask);
            fs.writeFile(tasksFilePath, JSON.stringify(tasks), (err) => {
                if (err) {
                  return res.status(500).json({ error: 'Server Error' });
                }
                res.status(201).json(newTask);
              });
          });
        };
        const updateTask = (req, res) => {
            const taskId = req.params.id;
            const updatedTask = req.body;
            fs.readFile(tasksFilePath, 'utf8', (err, data) => {
              if (err) {
                return res.status(500).json({ error: 'Internal Server Error' });
              }
              let tasks = JSON.parse(data);
              const index = tasks.findIndex(task => task.id === taskId);
              if (index === -1) {
                return res.status(404).json({ error: 'Task not found' });
              }
              tasks[index] = { ...tasks[index], ...updatedTask };
              fs.writeFile(tasksFilePath, JSON.stringify(tasks), err => {
                if (err) {
                  return res.status(500).json({ error: 'Internal Server Error' });
                }
                res.json(tasks[index]);
              });
            });
          };
          
          const deleteTask = (req, res) => {
            const taskId = req.params.id;
            fs.readFile(tasksFilePath, 'utf8', (err, data) => {
              if (err) {
                return res.status(500).json({ error: 'Internal Server Error' });
              }
              let tasks = JSON.parse(data);
              const index = tasks.findIndex(task => task.id === taskId);
              if (index === -1) {
                return res.status(404).json({ error: 'Task not found' });
              }
              tasks.splice(index, 1);
              fs.writeFile(tasksFilePath, JSON.stringify(tasks), err => {
                if (err) {
                  return res.status(500).json({ error: 'Internal Server Error' });
                }
                res.status(204).send();
              });
            });
          };
          
          module.exports = {
            getTasks,
            getTaskById,
            createTask,
            updateTask,
            deleteTask
          };





