const UserModel = require("../models/User");

const getUser = async (req, res) => {
  const { userId, username } = req.query;
  try {
    // const user = await UserModel.findById(req.params.id);
    const user = userId
      ? await UserModel.findById(userId)
      : await UserModel.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { userId, isAdmin, password } = req.body;
  if (userId === id || isAdmin) {
    if (password) {
      try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await UserModel.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { userId, isAdmin } = req.body;
  if (userId === id || isAdmin) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
};

const follow = async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;
  if (userId !== id) {
    try {
      const user = await UserModel.findById(id);
      const currentUser = await UserModel.findById(userId);
      if (!user.followers.includes(userId)) {
        await user.updateOne({ $push: { followers: userId } });
        await currentUser.updateOne({ $push: { followings: id } });
        res.status(200).json(`${userId} has been added to your followers`);
      } else {
        res.status(403).json(`you already follow ${userId}`);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't follow yourself");
  }
};

const unfollow = async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;
  if (userId !== id) {
    try {
      const user = await UserModel.findById(id);
      const currentUser = await UserModel.findById(userId);
      if (user.followers.includes(userId)) {
        await user.updateOne({ $pull: { followers: userId } });
        await currentUser.updateOne({ $pull: { followings: id } });
        res
          .status(200)
          .json(`${userId} has been unfollowed`);
      } else {
        res.status(403).json(`you are not following ${userId}`);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't unfollow yourself");
  }
};

const getFriends = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return UserModel.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  follow,
  unfollow,
  getFriends,
};
