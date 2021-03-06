const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courses: [{
        type: String,
        unique: true,
        ref: 'Course'
    }],
    roles: [{
        type: String,
        unique: true,
        ref: 'Role'
    }]
});

const Student = model('Student', studentSchema);

module.exports = Student;