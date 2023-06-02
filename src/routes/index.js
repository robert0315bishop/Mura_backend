const Router = require("express");
const { AdminSign } = require("../controllers/SignController");
const { AdminSignUp } = require("../controllers/SignUpController");
const { AllCandidates } = require("../controllers/CandidateController");
const { Download } = require("../controllers/DownloadController");
const { Jobs, newJob, deleteJob } = require("../controllers/JobController");
const { Faqs, newFaq, deleteFaq } = require("../controllers/FaqController");
const { AllCafeImages, CafeImageDelete } = require("../controllers/CafeController");
const { AllDinnerImages, DinnerImageDelete } = require("../controllers/DinnerController");
const { AllBarImages, BarImageDelete } = require("../controllers/BarController");

const router = Router();

router.post("/sign", AdminSign);
router.post("/signup", AdminSignUp)
router.get("/candidates", AllCandidates);
router.get("/download/:filename", Download);
router.get("/jobs", Jobs);
router.post("/newJob", newJob);
router.post("/deleteJob", deleteJob);
router.get("/faqs", Faqs);
router.post("/newFaq", newFaq);
router.post("/deleteFaq", deleteFaq);
router.get("/cafe/images", AllCafeImages);
router.post("/cafe/imageDelete", CafeImageDelete);
router.get("/dinner/images", AllDinnerImages);
router.post("/dinner/imageDelete", DinnerImageDelete);
router.get("/bar/images", AllBarImages);
router.post("/bar/imageDelete", BarImageDelete);

module.exports = router;