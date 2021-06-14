const Student = require('../models/student');
const Role = require('../models/role');
const bcrypt = require('bcryptjs');

const authStudentController = {
    registration: function(req, res) {
        const studentRole = new Role({value: 'Student'});
        const adminRole = new Role({value: 'Admin'});
        // const {email, password} = req.body;

        // if (Student.findOne({email})) return res.sendStatus(409);
        
        // const hashPass = bcrypt.hashSync(password, 4);
    }
}

module.exports = authStudentController;