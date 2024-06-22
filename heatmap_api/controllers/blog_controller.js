// const pool = require("../sql/db");
const connectToDatabase = require("../sql/db");
const fs = require("fs");

// function uploadBlogData(file, content) {
//   if (!file || !content) {
//     return Promise.reject(new Error("Image and Content are mandatory"));
//   }

//   const imageData = fs.readFileSync(file.path);
//   console.log(imageData);
//   const query = "INSERT INTO blog(image, content) VALUES (?, ?)";
//   const values = [imageData, content];

//   return new Promise((resolve, reject) => {
//     pool.query(query, values, function (err, result) {
//       if (err) {
//         console.error("Error inserting blog data:", err);
//         reject(err);
//       } else {
//         console.log("Data inserted successfully");
//         resolve(result);
//       }
//     });
//   });
// }

//upload blog data
async function uploadBlogData(req, res) {
  try {
    const { BlogData } = await connectToDatabase();

    const { file, content, title } = req.body;
    // const { content, title } = body;

    if (!file || !content || !title) {
      return res.status(400).json({ error: "Image, Content and Title are mandatory" });
    }

    const imageData = fs.readFileSync(file.path);
    console.log(imageData);
    const result = await BlogData.create({ image: imageData, content, title });

    return res.status(200).json({ data: result });
  } catch (error) {
    console.error("Error uploading blog data:", error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { uploadBlogData };
