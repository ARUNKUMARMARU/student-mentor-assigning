// Write API to Assign a student to Mentor
// Select one mentor and Add multiple Student 
// A student who has a mentor should not be shown in List
const mentorModel = require('../Model/mentor');
const studentModel = require('../Model/student')

const assignController = async(req,res)=>{
   try{
    const{ mentorId, studentId }= req.body;   

    const mentorDetails = await mentorModel.findById(mentorId);
    const studentDetails = await studentModel.findById(studentId);  
    
   
   mentorDetails.assignedStudents = [...mentorDetails.assignedStudents,  {Name : studentDetails.name, _id : studentDetails._id} ];   

   studentDetails.assignedMentor = {Name : mentorDetails.name, _id : mentorDetails._id };
   studentDetails.isAssigned = true;
 
   studentDetails.save()
    mentorDetails.save();    
     
 
    res.json({message : `${studentDetails.name} is assigned to ${mentorDetails.name}`})   

   }catch(error){

    res.status(500).json({message : "Error while assigning student", error : error.message})

   } 
}

module.exports = assignController;