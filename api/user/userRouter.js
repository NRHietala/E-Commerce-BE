const express = require("express");
const router = express.Router();

// import middleware
const validateToken = require("../middleware/validateToken");

const DB = require("../utils/db-helper");

router.get("/", validateToken, (_, res) => {
  DB.findAll("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
