const express = require("express");
const router = express.Router();
const authRoutes =  require("./auth.routes")
const propertyRoutes = require("./property.routes")
const customerRoutes = require("./customer.routes")


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes)
router.use("/property",propertyRoutes)
router.use("/customer",customerRoutes)

module.exports = router;
