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

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find(); //issue is being caused here
    console.log("task from DB/ you reached this far!!!: ",tasks);

    const groupedTasks = {
      toDo: tasks.filter((task) => task.status === "To Do"),
      inProgress: tasks.filter((task) => task.status === "In Progress"),
      completed: tasks.filter((task) => task.status === "Completed"),
    };
    res.status(200).json(groupedTasks);
  }
  catch{
    res.status(500).json({ message: "Database error!" });
  }
}