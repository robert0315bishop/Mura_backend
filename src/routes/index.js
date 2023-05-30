const Router = require("express");
const { AdminSign } = require("../controllers/SignController");
const { AllCandidates } = require("../controllers/CandidateController");
const { Download } = require("../controllers/DownloadController");

const router = Router();

router.post("/sign", AdminSign);
router.get("/candidates", AllCandidates);
router.get("/download/:filename", Download);

module.exports = router;