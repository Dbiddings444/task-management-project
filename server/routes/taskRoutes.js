const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authorize = require('../middleWare/authorize');


router.post('/api/auth/createTask', authorize.verify, taskController.createTask);



module.exports = router;