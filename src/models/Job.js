const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirement: {
        type: String,
        required: true,
    },
    responsibility: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Job", jobSchema);