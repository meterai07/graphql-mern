const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    status: {
        type: String,
        required: [true, 'Please provide a status'],
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
});

module.exports = mongoose.model('Project', ProjectSchema);