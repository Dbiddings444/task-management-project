const Task = require("../models/task");

exports.createTask = async (req, res) => {
  try {
    console.log("task object created!");
    const { summary, imageUrl, description, reporter, assignee } = req.body;
    const requiredFields = { summary, description, reporter, assignee };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }
    
    const newTask = new Task({summary, imageUrl, description, reporter, assignee })
    console.log("task object created!");
    await newTask.save();
    res.status(201).json({ message: "task created successfully!" });
  } catch (error) {
    res.status(400).json({ message: 'Error during task creation' });
  }
};
