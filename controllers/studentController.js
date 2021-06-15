const Student = require('../models/student');

const studentController = {
    getCourses: async function(req, res) {
        const student = req.student;
        const courses = await Student.findOne({email: student.email}, {courses: 1});
        return res.send(courses);
    }
}

module.exports = studentController;