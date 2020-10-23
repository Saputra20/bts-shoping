const dayjs = require("dayjs");
const sequelize = require("sequelize");
const model = require("../models/index");

exports.index = (req, res, next) => {
  model.users
    .findAll({
      raw: true
    })
    .then((users) => {
      res.status(200).json({
        status: 200,
        users: users,
      });

      console.log({
        status: 200,
        message: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

