const { Router } = require('express');
const {
  homeCtrl,
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
} = require('../controllers/task.controller');

const router = Router();

router.get('/', homeCtrl);
router.get('/tasks', getTasksCtrl);
router.get('/tasks/:id', getTaskCtrl);
router.post('/tasks', postTaskCtrl);
router.put('/tasks/:id', putTaskCtrl);
router.delete('/tasks/:id', deleteTaskCtrl);

module.exports = router;
