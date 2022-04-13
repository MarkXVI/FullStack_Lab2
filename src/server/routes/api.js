const router = require('express').Router();

const Course = require('../models/Course');
const Student = require('../models/Student');
const Registration = require('../models/Registration');

router.get('/', (req, res) => {
    res.send('Hello World')
});

module.exports = router;