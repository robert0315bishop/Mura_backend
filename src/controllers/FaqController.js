const Faq = require("../models/Faq");

const Faqs = async (req, res) => {
    try {
        const current = await Faq.find();
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

const newFaq = async (req, res) => {
    try {
        const faq = new Faq({
            title: req.body.title,
            content: req.body.content,
        });
        await faq.save();
        res.send("Success!");
    } catch (error) {
        throw error;
    }
}

const deleteFaq = async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body._id;
        console.log(id);
        const deleteFaq = await Faq.findByIdAndDelete(id);
        if(!deleteFaq) {
            res.send("Failed!");
        } else {
            res.send("Success!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { Faqs, newFaq, deleteFaq };