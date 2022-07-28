const UserModel = require("../models/User")

const register = async (req, res) => {
  const user = await new UserModel({
    username: "john",
    email: "john@gmail.com",
    password: "123456"
  })
  await user.save();
  res.send(user.username + "registered")
}

module.exports = {register}