const Student = require('../models/student');
const Role = require('../models/role');
const bcrypt = require('bcryptjs');

const authStudentController = {
    registration: async function(req, res) {
        const {email, password} = req.body;
        const candidat = await Student.findOne({email});

        if (candidat) return res.status(409).send({message: 'User with this mail is already exist'});
        
        const hashPassword = bcrypt.hashSync(password, 4);
        const userRole = await Role.findOne({value: `Student`});

        Student.create({email, password: hashPassword, roles: [userRole.value]})
        .then(() => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        })
    },
}

module.exports = authStudentController;