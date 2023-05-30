const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    coverletter: {
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
    authorize: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Applications", applicationSchema);