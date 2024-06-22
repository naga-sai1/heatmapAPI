const express = require("express");
const controller = require("../controllers/heatMapController");

const router = express.Router();

router.get("/getheatmapdata", controller.getHeatMapData);
router.get("/getbroadheatmapdata", controller.getBroadHeatMapData);
router.get("/getstrategyheatmapdata", controller.getStrategyHeatMapData);
router.get("/getthematicheatmapdata", controller.getThematicHeatMapData);
router.get("/getsectorheatmapdata", controller.getSectorHeatMapData);
router.get("/getheatmappcntdata", controller.getHeatMapPcntRankData);

module.exports = router;
