const mentorModel = require('../Model/mentor');

const viewStudentController = async(req,res)=>{
    try{
        const {mentorId} = req.body
        
        const mentorDetails = await mentorModel.findById(mentorId);

    res.status(200).json( mentorDetails.assignedStudents)
    }catch(error){

    }
}

module.exports = viewStudentController;