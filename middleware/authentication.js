const jwt = require("jsonwebtoken");

exports.token = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      status: 403,
      message: "Token tidak ditemukan , Silahkan sertakan token!",
    });
  }

  jwt.verify(req.headers.authorization, "saputra", (err) => {
    if (err) {
      console.log({
        status: 500,
        message: err.message,
      });

      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }

    next();
  });
};
