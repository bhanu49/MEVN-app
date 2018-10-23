const express = require('express');
const router = express.Router();
const Student = require('../models/student');
//get list of students from database

router.get('/students', function(req,res,next){
    Student.find({}).then(function (students) { 
        res.send(students);
     }).catch(next);
});

router.post('/students', function(req,res,next){
    var body = req.body;
    Student.create(body).then(function (student) { 
        res.send(student);
     }).catch(next);
});


module.exports = router;