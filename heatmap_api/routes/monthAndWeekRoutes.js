const express = require("express");

const controller = require("../controllers/month_week_controller");

const router = express.Router();

router.get("/getMonthAndWeekData", controller.getMonthAndWeekData);

module.exports = router;