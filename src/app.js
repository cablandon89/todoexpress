const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks.routes');
const middlewareError = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(tasksRoutes);

app.use(middlewareError);

module.exports = app;
