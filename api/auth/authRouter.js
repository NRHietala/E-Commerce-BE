const router = require("express").Router();
const bcrypt = require("bcryptjs");

// token creator
const tokenVendingMachine = require("../utils/tokenCreator");

// importing Users model
const User = require("../user/userModel");

// Auth Endpoints
router.post("/register", (req, res, next) => {
  let newUser = req.body;
  const hashedPass = bcrypt.hashSync(newUser.password, 8);
  newUser.password = hashedPass;

  User.addUser(newUser)
    .then(addedUser => {
      return res.status(201).json(addedUser);
    })
    .catch(e => {
      console.log(e);
    });
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const tryUser = await User.getByEmail(email);

  if (tryUser && bcrypt.compareSync(password, tryUser.password)) {
    const token = tokenVendingMachine(tryUser);
    res
      .status(200)
      .json({ message: "Login Successful", token, id: tryUser.id });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

module.exports = router;
