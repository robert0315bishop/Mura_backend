const Admin = require("../models/Admin");

const AdminSignUp = async (req, res) => {
    try {
        console.log("enter");
        const current = await Admin.findOne({ email: req.body.email, password: req.body.password });
        if ( current ) {
            res.send("Exists!");
        }
        const new_admin = new Admin({
            email: req.body.email,
            password: req.body.password,
        })
        await new_admin.save();
        res.send("Success!");
    } catch (error) {
        throw error;
    }
}

module.exports = { AdminSignUp };