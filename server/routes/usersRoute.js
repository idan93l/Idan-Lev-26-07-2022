const express = require('express');
const router = new express.Router();
const { getUsers, getUser, addUser, updateUser, deleteUser } = require('../controllers/usersController.js')

router.get("/getUsers", getUsers);

router.get("/getUser", getUser);

router.post("/newUser", addUser);

router.put("/update", updateUser);

router.delete("/delete", deleteUser);

module.exports = router;