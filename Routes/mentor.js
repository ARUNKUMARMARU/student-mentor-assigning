const express = require('express');
const mentorController = require('../Controller/mentor');

const mentorRouter = express.Router();

mentorRouter.post('/mentor', mentorController.addmentor);

module.exports = mentorRouter;