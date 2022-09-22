const mongoose = require('mongoose');
const schema = mongoose.Schema;


let student = new schema({
    name: {
    type: String,
    required : [true, 'name is required']
    },
    rollno: {
    type: Number,
    required : [true, 'rollno is required'],
    unique : true
    },
    gender: {
    type: String,
    required : [true, 'gender is required'],
    enum : {values :['male', 'female', 'other'], message : '{value} is not supported'}

    },
    dob: {
    type: Date,
    required : [true, 'date of birth is required']
    }
    },{
    collection: 'students'
    });
 
module.exports = mongoose.model('student', student);