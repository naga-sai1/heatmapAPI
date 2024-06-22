const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.post("/googlelogin", controller.googleLogin);

module.exports = router;
