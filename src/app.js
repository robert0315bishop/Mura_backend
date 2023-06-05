const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const Application = require("./models/Application");
const Cafe = require("./models/Cafe");
const multer = require("multer");
const path = require("path");

const routes = require("./routes");
const Dinner = require("./models/Dinner");
const Bar = require("./models/Bar");

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
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/submit', upload.single('file'), async (req, res) => {
  try{
    const { path } = req.file;
    const new_app = new Career({
        path: path,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position
    });
    await new_app.save();
    res.send("Success!");
  } catch (error) {
    throw error;
  }
});

const cafeStorage = multer.diskStorage({
  destination: "uploads/cafe",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const cafeUpload = multer({ storage: cafeStorage });

app.post('/api/cafeImageUpload', cafeUpload.single('image'), async (req, res) => {
  try{
    const { path } = req.file;
    console.log(req.file);
    const new_app = new Cafe({
        path: path,
    });
    await new_app.save();
    res.send("Success!");
  } catch (error) {
    throw error;
  }
});

const dinnerStorage = multer.diskStorage({
  destination: "uploads/dinner",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const dinnerUpload = multer({ storage: dinnerStorage });

app.post('/api/dinnerImageUpload', dinnerUpload.single('image'), async (req, res) => {
  try{
    const { path } = req.file;
    console.log(req.file);
    const new_app = new Dinner({
        path: path,
    });
    await new_app.save();
    res.send("Success!");
  } catch (error) {
    throw error;
  }
});

const barStorage = multer.diskStorage({
  destination: "uploads/bar",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const barUpload = multer({ storage: barStorage });

app.post('/api/barImageUpload', barUpload.single('image'), async (req, res) => {
  try{
    const { path } = req.file;
    console.log(req.file);
    const new_app = new Bar({
        path: path,
    });
    await new_app.save();
    res.send("Success!");
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