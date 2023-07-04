require("dotenv").config({
  path: "/Users/sonjay/Desktop/projects/netMern/backend/.env",
});

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({ error: "Authorization token required" });
    next();
  }

  let token = authorization.split(" ")[1];

  try {
    const _id = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(_id).select("_id");
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid authorization token" });
  }
};

module.exports = requireAuth;
