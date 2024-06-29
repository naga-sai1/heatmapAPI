const express = require("express");
const multer = require("multer");
const controller = require("../controllers/blog_controller");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

// Route to get blog data
router.get("/getblogsdata", controller.getBlogData);
router.put("/editBlog/:id", upload.single("file"), controller.editBlogData);

module.exports = router;
