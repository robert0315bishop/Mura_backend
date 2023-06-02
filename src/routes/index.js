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

router.post("/api/sign", AdminSign);
router.post("/api/signup", AdminSignUp)
router.get("/api/candidates", AllCandidates);
router.get("/api/download/:filename", Download);
router.get("/api/jobs", Jobs);
router.post("/api/newJob", newJob);
router.post("/api/deleteJob", deleteJob);
router.get("/api/faqs", Faqs);
router.post("/api/newFaq", newFaq);
router.post("/api/deleteFaq", deleteFaq);
router.get("/api/cafe/images", AllCafeImages);
router.post("/api/cafe/imageDelete", CafeImageDelete);
router.get("/api/dinner/images", AllDinnerImages);
router.post("/api/dinner/imageDelete", DinnerImageDelete);
router.get("/api/bar/images", AllBarImages);
router.post("/api/bar/imageDelete", BarImageDelete);

module.exports = router;