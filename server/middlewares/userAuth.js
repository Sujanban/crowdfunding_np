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

module.exports = checkAuth