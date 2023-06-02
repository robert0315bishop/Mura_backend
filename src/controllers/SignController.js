const Admin = require("../models/Admin");

const AdminSign = async (req, res) => {
    try {
        console.log("enter");
        const current = await Admin.findOne({ email: req.body.email, password: req.body.password });
        if ( current ) {
            res.send("Success!");
        } else {
            res.send("Failed!");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { AdminSign };