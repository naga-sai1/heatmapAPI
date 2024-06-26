const connectToDatabase = require("../sql/db");
// const multer = require("multer");
const fs = require("fs");
const path = require("path");

// const upload = multer({ dest: "uploads/" });

const express = require("express");
const app = express();

// app.post("/uploadblogdata", upload.single("image"), uploadBlogData);

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

//upload blog data
// async function uploadBlogData(req, res) {
//   try {
//     const { BlogData } = await connectToDatabase();
//     const reqBody = req.body;
//     const file = req.file;

//     // Check if the file and required form data are present
//     if (!file) {
//       return res.status(400).json({ error: 'No file uploaded.' });
//     }
//     if (!reqBody || !reqBody.title || !reqBody.content) {
//       // fs.unlinkSync(file.path);
//       return res.status(400).json({ error: 'Invalid form data' });
//     }

//     // Read the file data
//     const imageData = fs.readFileSync(file.path);

//     // Store the file data along with other form data in the database
//     const result = await BlogData.create({
//       image: imageData,
//       content: reqBody.content,
//       title: reqBody.title,
//     });

//     // Remove the temporary file after processing
//     fs.unlinkSync(file.path);

//     return res.status(200).json({ data: result });
//   } catch (error) {
//     console.error('Error uploading blog data:', error);
//     if (req.file && fs.existsSync(req.file.path)) {
//       fs.unlinkSync(req.file.path); // Remove the temporary file if there's an error
//     }
//     return res.status(500).json({ error: error.message });
//   }
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

// async function uploadBlogData(req, res) {
//   try {
//     const { BlogData } = await connectToDatabase();
//     const reqBody = req.body;
//     const file = req.file;
    
//    console.log(reqBody);
//    console.log(file);

//     // Check if the file and required form data are present
//     // if (!file) {
//     //   return res.status(400).json({ error: "No file uploaded." });
//     // }
//     // if (!reqBody || !reqBody.title || !reqBody.content) {
//     //   return res.status(400).json({ error: "Invalid form data" });
//     // }

//     // Read the file data
//     // const imageData = fs.readFileSync(file.path);

//     if (reqBody.title && reqBody.content) {
//       const result = await BlogData.create({
//         // image: imageData,
//         image: reqBody.file,
//         content: reqBody.content,
//         title: reqBody.title,
//       });

//       // Remove the temporary file after processing
//       // fs.unlinkSync(file.path);

//       return res.status(200).json({ data: result });
//     }
//   } catch (error) {
//     console.error("Error fetching heat map data:", error);
//     // if (req.file && fs.existsSync(req.file.path)) {
//     //   fs.unlinkSync(req.file.path); // Remove the temporary file if there's an error
//     // }
//     return res.status(500).json({ error: error.message });
//   }
// }

module.exports = {
  uploadBlogData,
  getBlogData,
};
