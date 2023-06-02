const Dinner = require("../models/Dinner");
const fs = require("fs");

const AllDinnerImages = async (req, res) => {
    try {
        const current = await Dinner.find();
        if ( !current ) {
            res.send("Failed!");
        }
        const imageData = current.map(dinner => {
            const imageBuffer = fs.readFileSync(dinner.path);
            const base64Image = imageBuffer.toString("base64");
            return {
                name: dinner._id,
                data: base64Image
            };
        });

        res.json(imageData);
    } catch (error) {
        throw error;
    }
}

const DinnerImageDelete = async(req, res) => {
    try {
        const id = req.body.id;
        const deleteImage = await Dinner.findByIdAndDelete(id);
        if(!deleteImage) {
            res.send("Failed!");
        } else {
            res.send("Success!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { AllDinnerImages, DinnerImageDelete };