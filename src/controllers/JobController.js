const Job = require("../models/Job");

const Jobs = async (req, res) => {
    try {
        const current = await Job.find();
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

const newJob = async (req, res) => {
    try {
        const job = new Job({
            title: req.body.title,
            type: req.body.type,
            time: req.body.time,
            description: req.body.description,
            requirement: req.body.requirement,
            responsibility: req.body.responsibility,
        });
        await job.save();
        res.send("Success!");
    } catch (error) {
        throw error;
    }
}

const deleteJob = async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body._id;
        console.log(id);
        const deleteJob = await Job.findByIdAndDelete(id);
        if(!deleteJob) {
            res.send("Failed!");
        } else {
            res.send("Success!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { Jobs, newJob, deleteJob };