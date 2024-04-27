const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ error: " Unauthorized route. Please Login" });
    }
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

const isAdmin = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ error: " Unauthorized route. Please Login" });
    }
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    if (decoded.role !== 1) {
      return res.json({ error: "Need Admin Access!" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = {checkAuth, isAdmin};
