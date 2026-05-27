const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateToken = (userId, role) => {
  try {
    const generateToken = jwt.sign({ id: userId, role }, config.JWT_SECRET, {
      expiresIn: "7d",
    });

    return generateToken;
  } catch (error) {
    console.log("Generate token error", error);
  }
};

module.exports = generateToken;
