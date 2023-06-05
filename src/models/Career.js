const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Careers", careerSchema);