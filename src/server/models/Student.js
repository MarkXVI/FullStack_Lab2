const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    signUpDate: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Student', studentSchema);