const Candidates = require("../models/Application");

const AllCandidates = async (req, res) => {
    try {
        const current = await Candidates.find();
        if ( !current ) {
            res.send("Failed!");
        }
        res.send({
            data: current,
            status: "Success!"
        })
    } catch (error) {
        throw error;
    }
}

module.exports = { AllCandidates };