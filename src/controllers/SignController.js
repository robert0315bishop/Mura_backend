const Admin = require("../models/Admin");

const AdminSign = async (req, res) => {
    try {
        const current = await Admin.findOne({ email: req.body.email, password: req.body.password });
        if ( current ) {
            res.send("Success!");
        }
        res.send("Failed!");
    } catch (error) {
        throw error;
    }
}

module.exports = { AdminSign };