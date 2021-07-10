const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

// middleware
const { validatePayload } = require("../middleware/validatePayload");
const validateEmail = require("../middleware/validateEmail");

// token creator
const tokenVendingMachine = require("../utils/tokenCreator");

// Register new user
router.post("/register", validatePayload, validateEmail, (req, res, next) => {
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

// Login user
router.post("/login", validatePayload, async (req, res, next) => {
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
