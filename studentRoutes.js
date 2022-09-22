const express = require('express');
const funcs = require('./studentController');
const { check } = require('express-validator/check');


router = express.Router();


router.post('/add-student',funcs.addStudent);
router.get('/list', funcs.studentList); //mothod=post, /list
router.get('/student/:id', funcs.getStudentByid);
router.put('/deleteStudent/:id', funcs.deleteStudent);
router.put('/updateStudent/:id', funcs.updateStudent);



module.exports = router;
