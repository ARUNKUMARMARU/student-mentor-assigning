const express = require('express');
const changeMentorController = require('../Controller/changementor');

const changeMentorRouter = express.Router();

changeMentorRouter.post('/changementor', changeMentorController);

module.exports = changeMentorRouter;