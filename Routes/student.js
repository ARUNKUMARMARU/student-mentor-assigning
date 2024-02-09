const express = require('express');
const studentController = require('../Controller/student');

const studentRouter = express.Router();

studentRouter.post('/student', studentController.addStudent);

module.exports = studentRouter;