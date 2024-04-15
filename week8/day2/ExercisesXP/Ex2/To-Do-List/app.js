const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  


app.use(express.json());

const toDoRoutes = require('./routes/todos.js');

app.use('/todos', toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});