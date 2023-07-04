require("dotenv").config({
  path: "/Users/sonjay/Desktop/projects/netMern/backend/.env",
});
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = function (_id) {
  //.sign(payload, secret,)
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

//login user

async function loginUser(req, res) {
  let { email, password } = req.body;
  try {
    let user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

//signup user
async function signupUser(req, res) {
  let { email, password } = req.body.data;
  try {
    //save user to database
    let user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  loginUser,
  signupUser,
};
