const express = require('express');
const controller = require('../controllers/coupon_code_controller');

const router = express.Router();

router.put('/togglecouponactivation/:id', controller.toggleCouponActivation);
router.get('/couponcodestatus', controller.getCouponCodeStatus);
router.get('/getuploadedfilesData', controller.getUploadedFilesData);
router.post('/uploadcouponcode', controller.uploadCouponCode);

module.exports = router;