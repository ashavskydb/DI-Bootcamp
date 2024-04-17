const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRouter');

app.use(express.json);

app.use('/tasks', taskRouter);

module.exports = app;

