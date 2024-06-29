const express = require("express")
const controller = require("../controllers/plans_controller")

const router = express.Router()

router.post("/uplodPlans", controller.createPlan);
router.get("/getPlans", controller.getPlans);

module.exports = router;