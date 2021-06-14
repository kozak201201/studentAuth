const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const Student = model('Student', studentSchema);

module.exports = Student;