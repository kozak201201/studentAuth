const Student = require('../models/student');
const bcrypt = require('bcryptjs');

const authStudentController = {
    registration: function(req, res) {
        const {email, password} = req.body;

        if (Student.findOne({email})) return res.sendStatus(409);
        
        const hashPass = bcrypt.hashSync(password, 4);
    }
}