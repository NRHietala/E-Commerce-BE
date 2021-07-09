const { jwtSecret } = require("./secret");
const jwt = require("jsonwebtoken");

module.exports = user => {
  const payload = {
    subject: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
};
