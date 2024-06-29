const connectToDatabase = require("../sql/db");

// async function toggleCouponActivation(status) {
//   return new Promise((resolve, reject) => {
//     // Convert the boolean status to a number since MySQL does not have a native boolean type.
//     const activationStatus = status ? 1 : 0;

//     getConnection((error, connection) => {
//       if (error) {
//         return reject(error);
//       }

//       const sql =
//         'UPDATE `coupon_code` SET `status` = ? WHERE `coupon_code` = "ABC10EF5"';
//       connection.query(sql, [activationStatus], (error, results) => {
//         connection.release(); // Release the connection back to the pool.
//         if (error) {
//           return reject(error); // If query fails, reject the promise.
//         }
//         resolve(results); // Resolve the promise with the query results.
//       });
//     });
//   });
// }

// toggleCouponActivation function
async function toggleCouponActivation(req, res) {
  try {
    const { CouponCodeData } = await connectToDatabase();
    const data = await CouponCodeData.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Coupon code not found" });
    if (req.body.status) data.status = req.body.status;
    if (req.body.discount) data.discount = req.body.discount;
    await data.save();
    return res.status(200).json({ message: data });
  } catch (error) {
    console.error("Error toggling coupon activation:", error);
    return res.status(500).json({ error: error.message });
  }
}

// upload coupon code
async function uploadCouponCode(req, res) {
  try {
    const { CouponCodeData } = await connectToDatabase();
    const data = await CouponCodeData.create(req.body);
    return res.status(200).json({ message: data });
  } catch (error) {
    console.error("Error uploading coupon code:", error);
    return res.status(500).json({ error: error.message });
  }
}

// getCouponCodeStatus function
async function getCouponCodeStatus(req, res) {
  try {
    const { CouponCodeData } = await connectToDatabase();

    const query = `SELECT * FROM coupon_code`;
    const data = await CouponCodeData.sequelize.query(query, {
      type: CouponCodeData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching coupon code status:", error);
    return res.status(500).json({ error: error.message });
  }
}

// Get all uploaded files data
async function getUploadedFilesData(req, res) {
  try {
    const { pool } = await connectToDatabase();
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("Error getting database connection:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const query = "SELECT * FROM file_data ORDER BY dates DESC";
        connection.query(query, (error, results) => {
          if (error) {
            console.log("Error executing the query", error);
            return res.status(500).json({ error: "Internal Server Error" });
          }
          res.status(200).json({ results });
        });
      }
    });
  } catch (error) {
    console.log("Error getting files data", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  toggleCouponActivation,
  getCouponCodeStatus,
  getUploadedFilesData,
  uploadCouponCode,
};
