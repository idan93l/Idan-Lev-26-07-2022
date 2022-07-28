const express = require('express');
const router = new express.Router();
const {register} = require("../controllers/authController.js")

router.post("/register", register);

module.exports = router;