const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve(__dirname, '..', 'task.json');

const writeTasks = async (todolist) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await fs.writeFile(TASK_PATH, JSON.stringify(todolist));
  } catch (error) {
    throw error;
  }
};

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

const addTask = async (newTask) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = await getAllTasks();
    const nextId = tasks.length + 1; // poner un id nuevo para la tarea
    // Construir la nueva tarea
    const newTaskObj = {
      id: nextId,
      ...newTask,
    };
    tasks.push(newTaskObj); // Se agrega al objeto con tareas
    await writeTasks(tasks); // Se agrega al archivo
    return newTaskObj;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, task) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = await getAllTasks(); // Obtenemos todas las tareas
    // Buscamos la tarea que queremos actualizar
    const taskIndex = tasks.findIndex((e) => e.id === id);

    const updatedTask = {
      ...tasks[taskIndex],
      ...task,
    };

    // Agregar la nueva tarea al arreglo general de tareas
    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = await getAllTasks();
    const taskIndex = tasks.findIndex((e) => e.id === id);
    tasks.splice(taskIndex, 1);
    await writeTasks(tasks);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
