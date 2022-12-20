import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) return res.status(400).send("username or password missing");

    const user = await User.findOne({ username: username });
    if (!user) return res.status(401).send("User doesnt exist");

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) return res.status(401).send("Invalid password");

    const token = user.generateAuthToken();

    const userData = { username: user.username, email: user.email, role: user.role };
    res.send({ userData: userData, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

// @desc    User sign out
// @route   POST /api/users/signOut
// @access  Public
const userSignout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.body.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { authUser, registerUser, getUsers, userSignout };
