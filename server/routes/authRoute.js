const express = require('express');
const router = new express.Router();
const {register} = require("../controllers/authController.js")

router.get("/register", register);

module.exports = router;