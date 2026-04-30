const mongoose = require('mongoose');

// Define the Project schema for portfolio projects
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageFile: {
        type: mongoose.Schema.Types.Mixed, // Store the image file as a mixed type (Buffer or String)
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    githubLink: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);