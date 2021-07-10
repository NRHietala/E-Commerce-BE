module.exports = {
  validatePayload,
};

function validatePayload(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and Password required!" });
  } else {
    next();
  }
}
