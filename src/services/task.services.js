const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve(__dirname, '..', 'task.json');

const getAllTasks = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = await getAllTasks();
    const task = tasks.find((e) => e.id === id);
    return task;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
};
