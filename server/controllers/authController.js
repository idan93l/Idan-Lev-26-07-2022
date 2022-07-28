const register = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
    res.send("hello from auth");
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

module.exports = {register}