const { getAllTasks, getTaskById } = require('../services/task.services');

const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskCtrl = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskCtrl,
};
