const studentModel = require('../Model/student');
 
const previousMentorController = async (req,res)=>{
    try{
        const {studentId} = req.body

    const studentDetais = await studentModel.findById(studentId);   
    

   return res.status(200).json(studentDetais.previousMentors)

    }catch(error){
        res.status(500).json({message : 'Error fetch previousMentor details', error:error.message})
    }
}

module.exports = previousMentorController;