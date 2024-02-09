const express = require('express');
const previousMentorController = require('../Controller/previousmentors');

const previousMentorRouter = express.Router();

previousMentorRouter.get('/previousmentor', previousMentorController);

module.exports = previousMentorRouter;