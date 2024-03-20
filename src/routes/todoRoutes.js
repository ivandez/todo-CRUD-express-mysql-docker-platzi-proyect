const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/all', todoController.todo_index);

module.exports = router;