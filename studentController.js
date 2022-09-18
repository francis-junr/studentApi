const fs = require("fs");
const { validationResult } = require('express-validator/check');

exports.formSend = (req,res,next)=>{
    res.send('<form action ="/add-student" method = "POST"><input type = "text" name = "rollno"><input type="text" name="studentName"><button type ="submit">Enter</button></forms><form action = "/list" method = "GET"><button type ="submit">List</button><form action = "/student" method = "GET"><input type = "text" name = "student"><button type = "submit">Show student</button>');
       
}
let details = [];
exports.addStudent =(req, res, next)=>{
    console.log('incoming req:', req.body)
    let index =details.findIndex(d => d.rollno === req.body.rollno)
    console.log(details, index);
    const errors = validationResult(req);
    console.log(errors.array());
    if(!errors.isEmpty()){
        return res.json({'status' : '400', 'message' : 'enter valid rollno and name'})
    }
    if(index > -1){
        res.json({'status' :'400','error': "sdf"});
        console.log('already in list');
    }
    else{
        details.push(req.body);
        console.log(details);
        res.json({'status' : 201,'message' : 'successfully updated'});
    }

}
exports.studentByRollno = (req, res, next)=>{
    let index = details.findIndex(d=> d.rollno===req.params.id);
    student = details[index];
    console.log(student.name);
    res.json(student);
}
exports.studentList = (req, res, next)=>{
    res.json({details});
}
