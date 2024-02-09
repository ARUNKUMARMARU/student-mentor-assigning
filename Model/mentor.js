const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name : String,
    mentorId : String,
    domain : String,
    assignedStudents :Array,
    email : String       
});

module.exports = mongoose.model("Mentor", mentorSchema);