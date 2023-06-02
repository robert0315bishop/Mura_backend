const mongoose = require("mongoose");

const cafeSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Cafes", cafeSchema);