const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");
const ShopingController = require("../controllers/ShopingController");

router.get("/", HomeController.index);
router.post("/signin", HomeController.signin);
router.post("/signup", HomeController.signup);

router.get("/users", auth.token, UserController.index);

router.get("/shopings", auth.token, ShopingController.index);
router.get("/shopings/:id", auth.token, ShopingController.show);
router.post("/shopings", auth.token, ShopingController.store);
router.put("/shopings/:id", auth.token, ShopingController.update);
router.delete("/shopings/:id", auth.token, ShopingController.destroy);

module.exports = router;
