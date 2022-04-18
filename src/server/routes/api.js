const router = require('express').Router();

const Course = require('../models/Course');
const Student = require('../models/Student');
const Registration = require('../models/Registration');

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        if (!courses) {
            throw new Error("There are no courses available");
        }
        res.send(courses);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/courses", async (req, res) => {
    const course = new Course({
        course_name: req.body.course_name,
        course_code: req.body.course_code,
        course_description: req.body.course_description,
    });
    await course.save()
        .then(course => {
            console.log('Course saved' , course);
            res.json({
                success: true,
                course
            });
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        if (!students) {
            throw new Error("There are no students available");
        }
        res.send(students);
    } catch (err) {
        console.log("students id error");
        res.status(400).json({ message: err.message });
    }
});

router.post("/students", async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await student.save()
        .then(student => {
            console.log('Student saved' , student);
            res.json({
                success: true,
                student
            });
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find();

        if (!registrations) {
            throw new Error("There are no students that have registered");
        }
        res.send(registrations);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/registrations", async (req, res) => {
    const registration = new Registration({
        student_id: req.body.student_id,
        course_code: req.body.course_code
    });
    await registration.save()
        .then(registration => {
            console.log('Registration saved' , registration);
            res.json({
                success: true,
                registration
            });
        }).catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;