const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : String,
    studentId : String,
    domain : String,
    assignedMentor : {
        type : {}, default : {}
    },
    previousMentors : Array,
    email : String ,
    isAssigned : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Student', studentSchema)