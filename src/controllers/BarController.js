const Bar = require("../models/Bar");
const fs = require("fs");

const AllBarImages = async (req, res) => {
    try {
        const current = await Bar.find();
        if ( !current ) {
            res.send("Failed!");
        }
        const imageData = current.map(bar => {
            const imageBuffer = fs.readFileSync(bar.path);
            const base64Image = imageBuffer.toString("base64");
            return {
                name: bar._id,
                data: base64Image
            };
        });

        res.json(imageData);
    } catch (error) {
        throw error;
    }
}

const BarImageDelete = async(req, res) => {
    try {
        const id = req.body.id;
        const deleteImage = await Bar.findByIdAndDelete(id);
        if(!deleteImage) {
            res.send("Failed!");
        } else {
            res.send("Success!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { AllBarImages, BarImageDelete };