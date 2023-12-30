const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
        },
    ],
});

module.exports = mongoose.model('Client', ClientSchema);