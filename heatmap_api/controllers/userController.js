const connectToDatabase = require("../sql/db");

async function googleLogin(req, res) {
  try {
    const { UserData } = await connectToDatabase();
    const reqBody = req.body;

    const query = `SELECT * FROM users WHERE email = :email`;
    const data = await UserData.sequelize.query(query, {
      type: UserData.sequelize.QueryTypes.SELECT,
      replacements: { email: reqBody.email },
    });

    if (data.length <= 0) {
      const result = await UserData.create(reqBody);
      return res.status(200).json({ data: result });
    }

    return res.status(200).json({ data: data[0] });
  } catch (error) {
    console.error("Error fetching heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

//get unsubscribe user data
async function getUnsubscribeUserData(req, res) {
  try {
    const { UserData } = await connectToDatabase();
    const query = `SELECT * FROM users WHERE is_subscribed = false`;
    const data = await UserData.sequelize.query(query, {
      type: UserData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (err) {
    console.log("error getting files data", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all subscribers data
async function getSubscribersData(req, res) {
  try {
    const { UserData } = await connectToDatabase();
    const query = `SELECT * FROM users WHERE is_subscribed = true`;
    const data = await UserData.sequelize.query(query, {
      type: UserData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error getting subscriber data", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

//get all user data
async function getAllUserData(req, res) {
  try {
    const { UserData } = await connectToDatabase();
    const query = `SELECT * FROM users`;
    const data = await UserData.sequelize.query(query, {
      type: UserData.sequelize.QueryTypes.SELECT,
    });

    return res.status(200).json({ data });
  } catch (error) {
    console.error("Error getting user data", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  googleLogin,
  getUnsubscribeUserData,
  getSubscribersData,
  getAllUserData,
};
