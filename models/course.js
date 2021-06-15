const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

const Course = model('Course', courseSchema);
module.exports = Course;