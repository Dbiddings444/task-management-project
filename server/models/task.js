const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    summary:{
        type: String, 
        require: true,
    },
    imageUrl: {
        type: String,
      },
      description: {
        type: String,
        required: true,
      },
      reporter: {
        type: String,
        required: true,
      },
      assignee: {
        type: String,
        required: true,
      },
      status: { 
        type: String, 
        enum: ['To Do', 'In Progress', 'Completed'], // Predefined status options
        default: 'To Do' // Default status
      },
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;