const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Resource', ResourceSchema);
