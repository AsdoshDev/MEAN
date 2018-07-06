var express = require('express');
var router = express.Router();
var Student = require('./models/Student');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanstack',function(err,response){
    if(err){
        console.log("Error");
    }
    console.log("Connection established");
});

var db = mongoose.connection;

router.get('/students',(req,res) => {
    getStudents(res);
});

router.post('/addstudent',(req,res) => {
    var student = new Student();
    student.name = req.body.name;
    student.save((err,result) => {
        if(err){
            console.log("Error");
            res.sendStatus(500);
        }
        getStudents(res);
    })
});

let response = {
    status : 200,
    message: null,
    data : []
}

getStudents = function(res){
    Student.find(function(err,docs){
        if(err){
            console.log("Error");
            res.sendStatus(500);
        }
    response.data = docs;
    res.json(response);
    }); 
}

module.exports = router;
