const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../user/userModel");

router.post("/register", (req, res, next) => {
  let newUser = req.body;
  const hashedPass = bcrypt.hashSync(newUser.password, 8);
  newUser.password = hashedPass;

  User.addUser(newUser)
    .then(addedUser => {
      return res.status(201).json(addedUser);
    })
    .catch(e => {
      next(e);
    });
});

module.exports = router;
