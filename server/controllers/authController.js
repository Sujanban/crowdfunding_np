const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { sendMail } = require("../utils/nodemailer");

// handling user registration
const handleRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    if (!validator.validate(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    // Check if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(409).json({ error: "User already exists" }); // 409 Conflict
    }

    // Hash the password and create the new user
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await newUser.save(); // Save the new user to the database

    // Respond with 201 Created
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//login controller
const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    if (!validator.validate(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if the user exists
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // 401 Unauthorized
    }

    // Create JWT token
    const token = jwt.sign(
      { _id: validUser._id, role: validUser.role },
      process.env.SECRETE_KEY,
      { expiresIn: "7d" }
    );

    // Return user data without password
    const userData = await User.findById(validUser._id).select("-password");

    // Set cookie and send response
    res
      .status(200) // 200 OK for successful login
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login successful", userData });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" }); // 500 Internal Server Error
  }
};

// handeling user logout
const handleLogout = async (req, res) => {
  try {
    // Clear the authentication cookie
    res.clearCookie("token");

    // Respond with a success message
    res.status(200).json({ message: "Logout successful" }); // 200 OK for successful logout
  } catch (error) {
    console.error("Error during logout:", error);

    // Respond with an error message
    res.status(500).json({ error: "Failed to log out. Please try again." }); // 500 Internal Server Error for unexpected issues
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
          expiresIn: "1h",
        });
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

// fetching user profile
const fetchUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.json({ error: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.json({ error: "Internal server error" });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRETE_KEY, {
      expiresIn: "10m",
    });
    const link = `http://localhost:5173/reset-password/${token}`;
    sendMail(email, link);
    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }
    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }
    const { _id } = jwt.verify(token, process.env.SECRETE_KEY);
    if (!_id) {
      return res.status(404).json({ error: "Token Expired!" });
    }
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleRegister,
  handleLogin,
  handleLogout,
  fetchUserProfile,
  handleGoogleLogin,
  forgetPassword,
  resetPassword,
};
