const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const test = (req, res) => {
  res.json("test is working");
};

// user authentication
const checkAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.log("Unauthorized route");
      return res.json({ error: " Unauthorized route" });
    }
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    const user = await User.findById(decoded._id);
    if (user.role !== 1) {
      console.log("Need admin Access");
      return res.json({ error: "Unauthorized Privilege" });
    }
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

// handling user registration
const handleRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.json({ error: "All fields are required" });
    }
    const isValid = validator.validate(email);
    if (!isValid) {
      return res.json({ error: "Email is not valid" });
    }
    if (password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters" });
    }
    let existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({ error: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.json(console.log(err));
  }
};

//login controller
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({ error: "All fields are required" });
    }
    const isValidEmail = validator.validate(email);
    if (!isValidEmail) {
     return res.json({ error: "Email is not valid" });
    }
    const validUser = await User.findOne({ email });
    if (!validUser) {
     return res.json({ error: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
     return res.json({ error: "Invalid credentials" });
    }

    // creating jwt token
    const token = jwt.sign({ _id: validUser._id }, process.env.SECRETE_KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    const userData = await User.findById(validUser._id).select('-password');
    console.log(userData)
    res.json(userData);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// accessing user data
const fetchUser = async (req, res,next) => {
  try {
    const { token } = req.cookies;
    // if (!token) {
    //   return res.json({ error: "Unauthorized" });
    // }
    if (token) {
      const validUser = jwt.verify(token, process.env.SECRETE_KEY);
      const user = await User.findById(validUser._id).select('-password');
      if (!user) {
        return res.json({ error: "Unauthorized" });
      } else {
        // return res.json({message: "User exists"});
        // console.log(user)
        res.json(user);
        next();
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

// handeling user logout
const handleLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// google login
const handleGoogleLogin = async (req, res) => {
  try {
    const { credential } = req.body.credentialResponse;
    const { jwtDecoded } = req.body;
    if (!credential) {
      return res.json({ error: "No Credentials Received" });
    }
    const userExist = await User.findOne({ email: jwtDecoded.email });
    if (jwtDecoded) {
      if (userExist) {
        const user = await User.findOne({ email: jwtDecoded.email });
        const token = jwt.sign({ _id: user._id }, process.env.SECRETE_KEY, {
          expiresIn: "1h",
        });
        res.cookie("token", token, { httpOnly: true });
        return res.json({ message: "Hi user" });
      }
      if (!userExist) {
        const id = new mongoose.Types.ObjectId();
        const token = jwt.sign({ _id: id }, process.env.SECRETE_KEY, {
          expiresIn: "1h"});
        const newUser = new User({
          _id: id,
          firstName: jwtDecoded.given_name,
          lastName: jwtDecoded.family_name,
          email: jwtDecoded.email,
          password: "sam12345",
        });
        await newUser.save();
        res.cookie("token", token, { httpOnly: true });
        return res.json({ message: "User created successfully" });
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  test,
  handleRegister,
  handleLogin,
  handleLogout,
  fetchUser,
  checkAuth,
  isAdmin,
  handleGoogleLogin,
};
