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

//edit plans in the database
// async function editPlan(req, res) {
//     const { PlansData } = await connectToDatabase();
//     const {id} = req.params
//     const {months, amount} = req.body
//     const query = `SELECT * FROM plans WHERE sl_no = ${id}`
//     const checkPlan = await PlansData.sequelize.query(query, {
//         type: PlansData.sequelize.QueryTypes.SELECT,
//     });

//     if (checkPlan.length === 0) {
//         return res.status(404).json({error: "Plan not found"});
//     }else {
//         const query = 
//     }
// }

module.exports = {
  createPlan,
  getPlans,
};
