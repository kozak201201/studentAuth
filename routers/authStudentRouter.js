const express = require('express');
const controller = require('../controllers/authStudentController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/registration',[
    check('email', 'Invalid email').isEmail(),
    check('password', 'Pussword must be more then 5 symbols').isLength({min: 6})
], controller.registration);

router.post('/login', controller.login);

router.get('/courses', authMiddleware, controller.getCourses);

module.exports = router;