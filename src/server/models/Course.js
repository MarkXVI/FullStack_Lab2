const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    course_code: {
        type: Number,
        maxLength: 50
    },
    course_name: {
        type: String
    },
    course_description: {
        type: String
    }
});

module.exports = mongoose.model('Course', courseSchema);