const express = require('express');
const router = new express.Router();
const { getUser, updateUser, deleteUser, addFriend, unfriend } = require('../controllers/usersController.js')

router.get("/", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.put("/:id/addFriend", addFriend);

router.put("/:id/unfriend", unfriend);

module.exports = router;