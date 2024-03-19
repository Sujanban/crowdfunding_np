const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const test = (req, res) => {
  res.json("test is working");
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
      res.json({ error: "All fields are required" });
      return;
    }
    const isValidEmail = validator.validate(email);
    if (!isValidEmail) {
      res.json({ error: "Email is not valid" });
      return;
    }
    const validUser = await User.findOne({ email });
    if (!validUser) {
      res.json({ error: "User does not exist" });
      return;
    }
    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
      res.json({ error: "Invalid credentials" });
      return;
    }

    // creating jwt token
    const token = jwt.sign({ _id: validUser._id }, process.env.SECRETE_KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Login successful" });
  } catch (error) {
    res.json({ error: error.message });
  }
};



// accessing user data
const verifyUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({ error: "Unauthorized" });
    }
    if (token) {
      const validUser = jwt.verify(token, process.env.SECRETE_KEY);
      const user = await User.findById(validUser._id);
      if(!user){

        return res.json({ error: "Unauthorized" });
      }else{
        // return res.json({message: "User exists"});
        res.json(user);
        next();
      }
      // res.json({user});
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};


// handling protected dashboard
// const handleDashboard = (req,verifyUser,res) => {
//   try {
//     res.json({message: "Dashboard"});
//   } catch (error) {
//     res.json({error: error.message})
//   }
// }


// handeling user logout
const handleLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  test,
  handleRegister,
  handleLogin,
  handleLogout,
  verifyUser,
  // handleDashboard
};
