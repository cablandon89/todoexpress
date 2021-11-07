const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../services/task.services');

const homeCtrl = async (req, res, next) => {
  try {
    res.json('Bienvenido a la aplicación de tareas');
  } catch (error) {
    next(error);
  }
};

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

const postTaskCtrl = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const newTask = {
      title,
      description,
    };
    const response = await addTask(newTask);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = req.body;
    await updateTask(Number(id), task);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteTask(Number(id));
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  homeCtrl,
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
};
