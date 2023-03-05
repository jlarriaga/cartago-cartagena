const express = require("express");
const router = express.Router();
const { createCustomerCtrl, deleteCustomerCtrl, editCustomerCtrl } = require("../controllers/customer.controller")

const {isAuthenticated} = require("../middleware/jwt.middleware")

router.post("/create", createCustomerCtrl)
router.delete("/:id/delete",deleteCustomerCtrl)
router.patch("/:id/edit",editCustomerCtrl)


module.exports = router;
