const express = require("express");
const { getVeteranStatus } = require("../controllers/veterans.controller");
const router = express.Router();

router.post("/status", getVeteranStatus);

module.exports = router;
