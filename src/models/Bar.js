const mongoose = require("mongoose");

const barSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Bars", barSchema);