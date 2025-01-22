const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authorize = require('../middleWare/authorize');


router.post('/api/auth/createTask', taskController.createTask);



module.exports = router;