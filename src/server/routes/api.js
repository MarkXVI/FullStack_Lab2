const router = require('express').Router();

const Course = require('../models/Course');
const Student = require('../models/Student');
const Registration = require('../models/Registration');

router.get('/', (req, res) => {
    res.send('API')
});

router.get('/courses', (req, res) => {
    res.send('courses');
});

router.get('/students', (req, res) => {
    res.send('students');
});

router.post('/register', (req, res) => {
    res.send('registered')
});



module.exports = router;