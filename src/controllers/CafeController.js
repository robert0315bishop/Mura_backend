const Cafe = require("../models/Cafe");
const fs = require("fs");

const AllCafeImages = async (req, res) => {
    try {
        const current = await Cafe.find();
        if ( !current ) {
            res.send("Failed!");
        }
        const imageData = current.map(cafe => {
            const imageBuffer = fs.readFileSync(cafe.path);
            const base64Image = imageBuffer.toString("base64");
            return {
                name: cafe._id,
                data: base64Image
            };
        });

        res.json(imageData);
    } catch (error) {
        throw error;
    }
}

const CafeImageDelete = async(req, res) => {
    try {
        const id = req.body.id;
        const deleteImage = await Cafe.findByIdAndDelete(id);
        if(!deleteImage) {
            res.send("Failed!");
        } else {
            res.send("Success!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { AllCafeImages, CafeImageDelete };