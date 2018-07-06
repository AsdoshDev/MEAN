var restful = require('node-restful');
var mongoose = restful.mongoose;
var StudentSchema =  new mongoose.Schema({
    name :String,
},{
    collection :"students"
});

var Student = restful.model('Student',StudentSchema);
module.exports = Student;
