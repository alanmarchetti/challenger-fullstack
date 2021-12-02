const mongoose = require("mongoose");
const User = require("../model/User.model");

async function findAllUsers(request, response) {
  const users = await User.find({});
  try {
    response.status(200).json({ success: true, users });
  } catch (e) {
    return response.status(500).json(e);
  }
}

async function findUser(request, response) {
  const { name } = request.body;

  const users = name
    ? await User.findOne({name: name})
    : await User.find();

  return response.json({ success: true, users });
}

async function findOneUser(request, response) {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(400).json({ error: "ID inválido" });
    return;
  }

  const user = await User.findById(id);
  if (user == null)
    return response
      .status(400)
      .json({ sucess: false, msg: "Usuario não encontrado!" });

  response.status(200).json({ sucess: true, user });
}

async function updateUser(request, response) {
  let { id } = request.params;
  let { name, lastname, phone } = request.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(400).json({ error: "ID inválido" });
    return;
  }

  let updates = {};

  if (name) {
    updates.name = name;
  }

  if (lastname) {
    updates.lastname = lastname;
  }

  if (phone) {
    updates.phone = phone;
  }

  const user = await User.findByIdAndUpdate(id, { $set: updates });

  response.json({ sucess: true, user });
}

async function removeUser(request, response) {
  const { id } = request.params;
  try {
    const user = await User.deleteOne({ _id: id });
    response.status(200).json({ success: true });
  } catch (err) {
    return response.status(400).json({ msg: err });
  }
}

module.exports = { findAllUsers, findOneUser, updateUser, removeUser, findUser };
