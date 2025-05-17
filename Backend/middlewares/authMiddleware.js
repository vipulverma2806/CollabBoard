const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token && token.startWith("Bearer")) {
        const token = token.split(" ")[1];

    }
  } catch (err) {}
};
