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
    const file = req.file;
    const { BlogData } = await connectToDatabase();
    const id = req.params.id;
    console.log('id', id);
    const content = req.body.content;
    const title = req.body.title;

    const checkResult = `SELECT * FROM blog WHERE slno = ${id}`

    const data = await BlogData.sequelize.query(checkResult, {
      type: BlogData.sequelize.QueryTypes.SELECT,
    });

    if (data.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    else{

    const imageData = fs.readFileSync(file.path);
   
    const query = `UPDATE blog SET title = ?, content = ?, image = ? WHERE slno = ${id}`;
    const values = [title, content, imageData];
    const result = await BlogData.sequelize.query(query, {
      replacements: values,
    });
      return res.status(200).json({ data: "Blog edited successfully" });
    }
  } catch (err) {
    console.log("error editing blog data", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  uploadBlogData,
  getBlogData,
  editBlogData,
};
