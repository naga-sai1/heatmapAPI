const express = require("express");
const controller = require("../controllers/blog_controller");

const router = express.Router();

router.post('/uploadblogdata', controller.uploadBlogData);
router.get("/getblogsdata", controller.getBlogData);


module.exports = router;