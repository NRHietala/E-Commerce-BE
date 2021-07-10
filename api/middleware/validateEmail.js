const Users = require("../user/userModel");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await Users.getByEmail(email);

  if (user) {
    res.status(400).json({ message: "Email is already taken" });
  } else {
    next();
  }
};
