const mongoose = require("mongoose");

const dinnerSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Dinners", dinnerSchema);