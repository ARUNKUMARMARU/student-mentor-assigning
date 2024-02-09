const mentorModel = require('../Model/mentor');

const mentorController = {
    addmentor : async(req,res)=>{
    try{
        const {name, mentorId, domain, assignedStudents, email} = req.body;

        const verifyEmail = await mentorModel.findOne({email});
        if(verifyEmail){            
            res.status(409).json({error : "This email id was alredy exists"})
        }
                
        const newMentor = new mentorModel({
            name,
            mentorId,
            domain,
            assignedStudents,
            email
        });

        const savedMentor = await newMentor.save();
        res.status(200).json({message : "New Mentor added", savedMentor})

    }catch(error){
        res.status(500).json({error : error.message})
    }
},

 getmantor : async (req,res)=>{
    try{
        const savedMentor = await mentorModel.find({});
        return res.status(200).json({message : "Mentor detail fetched", savedMentor})
              
    }catch(error){
        res.status(500).json({error : error.message})
    }
 }
}

module.exports = mentorController;