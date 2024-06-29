const connectToDatabase = require("../sql/db");

//upload plans to the database
async function createPlan(req, res) {
  try {
    console.log("planes created");
    const { PlansData } = await connectToDatabase();
    const { months, amount } = req.body;

    const query = `INSERT INTO plans(months, amount) VALUES ( ${months}, ${amount})`;

    const result = await PlansData.sequelize.query(query, {
      type: PlansData.sequelize.QueryTypes.INSERT,
      replacements: { months, amount },
    });

    return res.status(200).json({ data: "Plan Uploaded successfully" });
  } catch (error) {
    console.error("Error fetching heat map data:", error);
    return res.status(500).json({ error: error.message });
  }
}

//get all plans from the database
async function getPlans(req, res) {
    try {
        const { PlansData } = await connectToDatabase();
        const query = 'SELECT * FROM plans'
        const plans = await PlansData.sequelize.query(query, {
            type: PlansData.sequelize.QueryTypes.SELECT,
        })
        return res.status(200).json({ data: plans });
    } catch (error) {
        console.error("Error fetching heat map data:", error);
        return res.status(500).json({ error: error.message });
    }
}

//edit plans data
async function editPlan(req, res) {
  try {
    const { PlansData } = await connectToDatabase();
    // Update the access_permissions using the Sequelize model
    const data = await PlansData.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: "Plan not found" });
     // Update access_permissions properties
    if (req.body.months) data.months = req.body.months;
    if (req.body.amount) data.amount = req.body.amount;
    await data.save();
    return res.status(200).json({ message: data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}


module.exports = {
  createPlan,
  getPlans,
  editPlan,
};
