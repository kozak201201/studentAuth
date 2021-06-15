const Student = require('../models/student');
const Role = require('../models/role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
    login: async function(req, res) {
        const {email, password} = req.body;
        const student = await Student.findOne({email});

        if (!student) return res.sendStatus(404);

        const isValidPassword = await bcrypt.compareSync(password, student.password);

        if (!isValidPassword) return res.status(400).send({message: 'Error: Invalid password'});

        const token = jwt.sign({email: student.email, roles: student.roles}, 
            process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'});
        res.status(200).send({token});
    },
    getCourses: async function(req, res) {
        const user = req.user;
        const courses = await Student.find({email: user.email}, {courses: 1});
        res.send(courses);
    }
}

module.exports = authStudentController;