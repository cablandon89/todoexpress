const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');
const middlewareError = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(tasksRoutes);

app.use(middlewareError);

module.exports = app;
