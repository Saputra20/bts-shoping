const model = require("../models/index");

exports.index = (req, res, next) => {
  model.shoping.findAll({
    raw: true,
  })
    .then((shopings) => {
      res.status(200).json({
        status: 200,
        shopings: shopings,
      });

      console.log({
        status: 200,
        shopings: shopings,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

exports.show = (req, res, next) => {
  model.shoping.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((shoping) => {
      res.status(200).json({
        status: 200,
        data: shoping,
      });

      console.log({
        status: 200,
        data: shoping,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

exports.store = (req, res, next) => {
  model.shoping.create(req.body)
    .then((shoping) => {
      res.status(200).json({
        status: 200,
        data: shoping,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

exports.update = (req, res, next) => {
  model.shoping.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((shoping) => {
      if (!shoping) {
        return res.json({
          status: 403,
          message: "Shoping tidak tersedia",
        });
      }

      model.shoping.update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          res.json({
            status: 200,
            message: "Berhasil memperbaharui data",
          });
        })
        .catch((err) => {
          console.log({
            status: 500,
            message: err.message,
          });

          res.status(500).json({
            status: 500,
            message: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};

exports.destroy = (req, res, next) => {
  model.shoping.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((shoping) => {
      res.status(200).json({
        status: 200,
        message: "Berhasil delete shoping",
      });

      console.log({
        status: 200,
        message: "Berhasil delete shoping",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.message,
      });
    });
};
