var express = require('express');
var router = express.Router();

const CompaniesController = require("../controllers/CompaniesController");
const UsersController = require("../controllers/UsersController");
const UsageController = require("../controllers/UsageController");

router.get("/user", UsersController.index);
router.get("/company", CompaniesController.index);
router.post("/usage/upload", UsageController.parseFiles);

module.exports = router;
