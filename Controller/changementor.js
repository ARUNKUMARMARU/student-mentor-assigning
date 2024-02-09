const studentModel = require('../Model/student');
const mentorModel = require('../Model/mentor');

const changeMentor = async(req,res)=>{
   try{
    const {studentId, newMentorId} = req.body;

    const studentDetails = await studentModel.findById(studentId);
    const newMentorDetails = await mentorModel.findById(newMentorId);

    //model.findByIdAndUpdate(id, {}, {lean}), find({_id:new mongoose.Types.ObjectId(studentId)},{domain:1})

    const oldMentor = studentDetails.assignedMentor;
    studentDetails.assignedMentor = {Name : newMentorDetails.name, _id : newMentorDetails._id};
    studentDetails.previousMentors = [...studentDetails.previousMentors, oldMentor]

    studentDetails.save();

    const  updateOldMent = await mentorModel.findById(oldMentor._id)
    
   // updateOldMent.assignedStudents.pop(assignedStudents._id===studentId)
    updateOldMent.save();

    res.json({studentDetails})


   }catch(error){
    res.status(500).json({error : error.message})
   }
    

}

module.exports = changeMentor;