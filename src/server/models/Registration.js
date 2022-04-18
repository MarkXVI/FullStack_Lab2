const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema({
    student_id: {
        type: String
    },
    course_code: {
        type: Number
    },
    unix_timestamp: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Registration', registrationSchema);