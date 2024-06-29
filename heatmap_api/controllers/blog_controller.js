const connectToDatabase = require("../sql/db");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//upload blog data
async function uploadBlogData(file, content, title) {
  const { BlogData } = await connectToDatabase();
  if (!file || !content || !title) {
    return Promise.reject(new Error("Image and Content are mandatory"));
  }

  const imageData = fs.readFileSync(file.path);
  console.log(imageData);
  const query = "INSERT INTO blog(image, content, title) VALUES (?, ?, ?)";
  const values = [imageData, content, title];

  return new Promise((resolve, reject) => {
    BlogData.sequelize
      .query(query, {
        replacements: values,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//get blog data
async function getBlogData(req, res) {
  try {
    const { BlogData } = await connectToDatabase();
    const query = `SELECT * FROM blog`;
    const data = await BlogData.sequelize.query(query, {
      type: BlogData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (err) {
    console.log("error getting files data", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

//edit blog data
async function editBlogData(req, res) {
  try {
    const { BlogData } = await connectToDatabase();
    const data = await BlogData.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Blog not found" });
    if (req.file) {
      const imageData = fs.readFileSync(req.file.path);
      data.image = imageData;
    }
    if (req.body.content) data.content = req.body.content;
    if (req.body.title) data.title = req.body.title;
    await data.save();
    return res.status(200).json({ message: data });
  } catch (error) {
    console.error("Error editing blog data:", error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  uploadBlogData,
  getBlogData,
  editBlogData,
};
