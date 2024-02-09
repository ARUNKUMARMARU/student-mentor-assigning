const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mentorRouter = require('./Routes/mentor');
const studentRouter = require('./Routes/student');
const assignRouter = require('./Routes/assignstudent');
const previousMentorRouter = require('./Routes/previousmentor');
const viewStudentsRouter = require('./Routes/viewstudents');
const changeMentorRouter = require('./Routes/changementor');

app.use('/api', mentorRouter);
app.use('/api', studentRouter);
app.use('/api', assignRouter);
app.use('/api', previousMentorRouter);
app.use('/api', viewStudentsRouter);
app.use('/api', changeMentorRouter);


module.exports = app;