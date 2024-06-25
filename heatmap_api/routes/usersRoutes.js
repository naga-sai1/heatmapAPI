const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.post("/googlelogin", controller.googleLogin);
router.get("/unsubscribeuserdata", controller.getUnsubscribeUserData);
router.get("/subscribersdata", controller.getSubscribersData);

module.exports = router;
