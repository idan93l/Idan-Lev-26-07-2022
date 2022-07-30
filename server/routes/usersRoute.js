const express = require('express');
const router = new express.Router();
const { getUser, updateUser, deleteUser, follow, unfollow, getFriends } = require('../controllers/usersController.js')

router.get("/", getUser);

router.get("/friends/:userId", getFriends);

router.put("/:id", updateUser);

router.put("/:id/follow", follow);

router.put("/:id/unfollow", unfollow);

router.delete("/:id", deleteUser);

module.exports = router;