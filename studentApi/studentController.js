
const { validationResult, Result } = require('express-validator/check');
const student = require('./student.js');
let studentModel = require('./student.js');





       
exports.addStudent =(req, res, next)=>{
    let student = new studentModel(req.body);
    student
    .save()
    .then(response => res.json({student : 'student added successfully',response}))
    .catch(err => {
        //let error = err.err.errors;
        res.json({err});
    })

}




exports.getStudentByid = (req, res, next)=>{
    console.log(req.params.id)
    studentModel.findById(req.params.id, (err, student)=> {
        res.json(student);
    })
}

exports.studentList = (req, res, next)=>{
    studentModel.find((err, student) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(student);
        }
    });
}

exports.deleteStudent = (req, res, next) =>{
    studentModel.findByIdAndRemove(req.params.id, (err, student)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json('student deleted successfully');
        }
    })
}
exports.updateStudent = (req, res, next) =>{
    console.log(req.body.id);
    studentModel.findById(req.params.id, (err, student)=> {
        console.log(student);
        if (!student)
        return next(new Error('Unable To Find satudent With This Id'));
        else {
        student.name = req.body.name;
        student.rollno = req.body.rollno;
        student.gender = req.body.gender;
        student.dob = req.body.dob;
        
        student.save().then(emp => {
        res.json('Employee Updated Successfully');
        })
        }
    })
}