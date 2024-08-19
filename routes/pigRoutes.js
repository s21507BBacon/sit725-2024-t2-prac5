const express = require("express");
const router = express.Router();
const pigController = require("../controllers/pigcontroller");

router.get("/projects", pigController.getAllPigs);
router.post("/projects", pigController.addPig);

module.exports = router;
