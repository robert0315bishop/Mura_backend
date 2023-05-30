const Router = require("express");
const { AdminSign } = require("../controllers/SignController");
const { AllCandidates } = require("../controllers/CandidateController");
const { Download } = require("../controllers/DownloadController");

const router = Router();

router.post("/api/sign", AdminSign);
router.get("/api/candidates", AllCandidates);
router.get("/api/download/:filename", Download);

module.exports = router;