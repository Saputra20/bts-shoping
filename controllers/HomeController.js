const jwt = require("jsonwebtoken");
const model = require("../models/index");
const { use } = require("../router/router");

exports.index = (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: "Hello",
  });
};

exports.signin = (req, res, next) => {
  model.users
    .findOne({
      raw: true,
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(403).json({
          status: 403,
          message: "User atau Password salah!",
        });
      }

      jwt.sign(
        {
          iss: "TRYsequelize",
          aud: user.name,
        },
        "saputra",
        {
          algorithm: "HS256",
          expiresIn: "3h",
        },
        (err, token) => {
          if (err) {
            console.log({
              status: 500,
              message: err.message,
            });

            return res.status(500).send({
              status: 500,
              message: err.message,
            });
          }

          res.status(200).json({
            status: 200,
            email: user.email,
            username: user.username,
            token: token,
          });
        }
      );
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

exports.signup = (req, res, next) => {
  model.users
    .create(req.body)
    .then((user) => {
      res.status(200).json({
        status: 200,
        message: user,
      });

      console.log({
        status: 200,
        message: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.name,
        errors: err.errors,
      });
    });
};
