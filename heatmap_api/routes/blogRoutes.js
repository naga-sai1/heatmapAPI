const express = require("express");
const multer = require("multer");
const controller = require("../controllers/blog_controller");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

// router.post('/uploadblogdata', controller.uploadBlogData);
// router.get("/getblogsdata", controller.getBlogData);

// Route to handle file upload and blog data
// router.post('/uploadblogdata', upload.single("image"), (req, res) => {
//     console.log(req.file);
// })

// Route to get blog data
router.get("/getblogsdata", controller.getBlogData);


module.exports = router;