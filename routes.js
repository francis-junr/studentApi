const express = require('express');
const funcs = require('./studentController');
const { check } = require('express-validator/check');


router = express.Router();




router.get('/',funcs.formSend);
router.post('/add-student',check('rollno').isInt(), check('name').isAlpha(),funcs.addStudent);
router.get('/list', 
funcs.studentByRollno); //mothod=post, /list
router.get('/student/:id', funcs.studentList);



module.exports = router;
