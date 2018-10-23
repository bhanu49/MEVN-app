const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create student schema and model

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: String,
    },
    grade: {
        type: String,
        required: [true,'Missing grade']
    },
    email: {
        type: String,
        required: [true, 'email is necessary']
    }
});

//create collection 
const Student = mongoose.model('student',studentSchema);

module.exports = Student;