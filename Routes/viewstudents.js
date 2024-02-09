const express = require('express');

const viewStudentController = require('../Controller/viewstudents');
const viewStudentsRouter = express.Router();

viewStudentsRouter.get('/viewstudents', viewStudentController);

module.exports = viewStudentsRouter;