const express = require('express');
const controller = require('../controllers/blog_controller');

const router = express.Router();

router.post('/uploadblogdata', controller.uploadBlogData);

module.exports = router;