const getUsers = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
    res.send("hello from users");
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

const getUser = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
    res.send("hello from user");
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

const addUser = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

const updateUser = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}
const deleteUser = async (req, res) => {
  try {
    // const usersData = await UserModel.find();
    // res.status(200).send(usersData);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

module.exports = {getUsers, getUser, addUser, updateUser, deleteUser};