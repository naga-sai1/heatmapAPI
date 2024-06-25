const express = require('express');
const controller = require('../controllers/coupon_code_controller');

const router = express.Router();

router.post('/togglecouponactivation', controller.toggleCouponActivation);
router.get('/couponcodestatus', controller.getCouponCodeStatus);
router.get('/getuploadedfilesData', controller.getUploadedFilesData)

module.exports = router;