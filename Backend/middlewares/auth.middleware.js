const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(400).json({ msg: "Please login first!" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { // Set req.user as an object
      userId: decoded.userId,
      user: decoded.user,
      MobileNumber: decoded.MobileNumber,
    };
    next();
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};

module.exports = { auth };

