const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask, 
} = require('../controllers/taskController'); 

const validateTaskData = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required')
];

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', validateTaskData, createTask);
router.put('/:id', validateTaskData, updateTask); 
router.delete('/:id', deleteTask);

module.exports = router;
