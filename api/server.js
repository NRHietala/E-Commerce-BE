const createError = require("http-errors");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// Routers //

const authRouter = require("./auth/authRouter");
const userRouter = require("./user/userRouter");

// App Routes //

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (_, res) => {
  res.send("API is running! Better go out and catch it! 🏃‍♂️");
});

// Catch 404 and "next" to error handler
server.use(function (req, res, next) {
  next(createError(404));
});

// Error Handler
server.use(function (err, req, res, next) {
  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === "development") {
      res.locals.error = err;
    }
  }
  console.error(err);
  if (process.env.NODE_ENV === "production" && !res.locals.message) {
    res.locals.message = "ApplicationError";
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status || 500);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }
  next(err);
});

module.exports = server;
