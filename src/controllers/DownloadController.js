const path = require("path");

const Download = (req, res) => {
    const { filename } = req.params;
    let dir = path.resolve(__dirname, "../..");
    const file = path.join(dir, "uploads", filename);
    console.log(file);

    // Send the file as a downloadable attachment
    res.download(file, (error) => {
        if (error) {
            console.error('Error downloading file:', error);
            res.status(500).json({ error: 'Server error' });
        }
    });
}

module.exports = { Download };