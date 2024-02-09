const studentModel = require('../Model/student');

const studentController = {
    addStudent : async(req,res)=>{
       try{
        const {name, studentId, domain, assignedMentor, email} = req.body;
        
        const verifyEmail = await studentModel.findOne({email})
        if(verifyEmail){
            return res.status(409).json({message : "This mail id was already exists"})
        }

        const newStudent = new studentModel({
            name,
            studentId,
            domain,
            assignedMentor,
            email
        });

        const savedStudent = await newStudent.save();

        return res.status(200).json({message : 'New student saved', savedStudent});;

       }catch(error){
        return res.status(500).json({error : error.message});
       }
    }
}

module.exports = studentController;