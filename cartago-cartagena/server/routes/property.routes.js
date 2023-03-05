const express = require("express");
const router = express.Router();
const {getAllPropertiesCtrl, createPropertiesCtrl } = require("../controllers/property.controller")
const {isAuthenticated} = require("../middleware/jwt.middleware")

router.get("/all-properties", getAllPropertiesCtrl)
router.post("/create",isAuthenticated, createPropertiesCtrl)


module.exports = router;