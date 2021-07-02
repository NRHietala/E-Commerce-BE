const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (_, res) => {
  res.send("API is running! Better go out and catch it! 🏃‍♂️");
});

server.use("*", (_, res) => {
  res.status(404).json({ message: "404: Resource not found" });
});

module.exports = server;
