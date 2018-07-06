var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
var api = require('./server/api');
var mongoose = require('mongoose');
var Student = require('./server/models/Student');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/',api);


/* use dist folder created from ng build */
app.use(express.static(path.join(__dirname,'dist')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
   });

var port = process.env.PORT || '4200';
app.set('port',port);
app.listen(app.get('port'),function(err,response){
    console.log("Server is running on " + app.get('port'));
});

// app.use(function (req, res, next) {        
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
//     res.setHeader('Access-Control-Allow-Credentials', true);       
//     next();  
// });  

