const { Router } = require('express');
const { getTasksCtrl, getTaskCtrl } = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getTasksCtrl);
router.get('/tasks/:id', getTaskCtrl);

module.exports = router;
