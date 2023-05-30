const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const Application = require("./models/Application");
const multer = require("multer");
const path = require("path");

const routes = require("./routes");

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//db connect
mongoose
  .connect(`mongodb://localhost/mura`)
  .then(() => {
    return console.info(`Successfully connected.`);
  })
  .catch((error) => {
    console.error("Error connecting to database: ", error);
    return process.exit(1);
});

const storage = multer.diskStorage({
  destination: './uploads', // Set the destination folder for uploaded files
  filename: (req, file, cb) => {
    // Generate a unique filename by appending the current timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

app.post('/api/submit', upload.single('file'), async (req, res) => {

  try{
    const { path } = req.file;
    console.log("ENTER");
    const current = await Application.findOne({ email: req.body.email });
    if (current) {
        res.send("Exists!");
    } else {
      const new_app = new Application({
          path: path,
          coverletter: req.body.coverletter,
          email: req.body.email,
          phone: req.body.phone,
          authorize: req.body.authorize
      });
      await new_app.save();
      res.send("Success!");
    }
  } catch (error) {
    throw error;
  }
});

app.use(routes);

const port = 8080;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

module.exports = { app, server };