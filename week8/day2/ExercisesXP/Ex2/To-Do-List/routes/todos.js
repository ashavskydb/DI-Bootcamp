const express = require('express');
const router = express.Router();

const todos = [];

router.get('/', (req, res) => {
        res.json(todos);
    });

router.post('/', (req, res) => {
    const { text } = req.body;
    const newTodo = {id: todos.length + 1, text};
    todos.push(newTodo);    
    res.status(201).json(newTodo);
}); 


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const toDoUpdate = todos.find(todo => todo.id === parseInt(id));
    if (toDoUpdate) {   
        return res.status(404).json({ msg: 'Not Found ' });
    }

    toDoUpdate.text = text;
    res.json(200).json(toDoUpdate);
}); 

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ msg: 'Not Found ' });
    }

    todos.splice(index, 1);
    res.status(204).end();
    });

module.exports = router;


