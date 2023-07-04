const User = require("../models/userModel");

//login user

async function loginUser(req, res) {
  res.json({ msg: "login user" });
}

//signup user
async function signupUser(req, res) {
  let { email, password } = req.body;
  try {
    let user = await User.signup(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  loginUser,
  signupUser,
};
