const express = require('express');
const router = new express.Router();
const { getUser, updateUser, deleteUser, addFriend, unfriend, getFriends } = require('../controllers/usersController.js')

router.get("/", getUser);

router.get("/friends/:userId", getFriends);

router.put("/:id", updateUser);

router.put("/:id/addFriend", addFriend);

router.put("/:id/unfriend", unfriend);

router.delete("/:id", deleteUser);

module.exports = router;