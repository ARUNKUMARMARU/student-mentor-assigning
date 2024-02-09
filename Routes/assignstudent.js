const express = require('express');
const studentModel = require('../Model/student')

const assignController = require('../Controller/assignstudent');

const assignRouter = express.Router();

assignRouter.post('/assigningstudents', assignController)

module.exports = assignRouter;