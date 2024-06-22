const connectToDatabase = require('../sql/db');

// Fetch stock data
async function getStockData(req, res) {
    try {
        const { StockData } = await connectToDatabase();

        const query = 'SELECT * FROM stock_data';

        const data = await StockData.sequelize.query(query, {
            type: StockData.sequelize.QueryTypes.SELECT,
        });

        return res.status(200).json({ message: data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getStockData,
};
