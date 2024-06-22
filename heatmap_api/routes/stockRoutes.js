const express = require("express");
const controller = require("../controllers/stockController");

const router = express.Router();

router.get("/getstockdata", controller.getStockData);

module.exports = router;
