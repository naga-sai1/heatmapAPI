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

module.exports = {
  googleLogin,
};
