const mysql = require('mysql');
const { Sequelize } = require('sequelize');
const StockModel = require('../models/stockModel');
const HeatMapModel = require('../models/heatMapModel');
const BroadHeatMapModel = require('../models/broadHeatMapModel');
const ThematicHeatMapModel = require('../models/thematicHeatMapModel');
const StrategyHeatMapModel = require('../models/strategyHeatMapModel');
const SectorHeatMapModel = require('../models/sectorHeatMapModel');
const UserModel = require('../models/userModel');
const BlogModel = require('../models/blogModel');
const CouponCodeModel = require('../models/couponCodeModel');
const MonthAndWeekModel = require('../models/monthAndWeekModel');

// MySQL connection pool setup
const pool = mysql.createPool({
  host: '62.72.28.52',
  user: 'u276789778_stocks',
  password: '123@Mango',
  database: 'u276789778_stocks',
});

// Sequelize ORM setup
const sequelize = new Sequelize(
  'u276789778_stocks',
  'u276789778_stocks',
  '123@Mango',
  {
    dialect: 'mysql',
    host: '62.72.28.52',
    port: 3306,
    ssl: true,
    logging: false,
  }
);

// Define models using Sequelize
const StockData = StockModel(sequelize);
const HeatMapData = HeatMapModel(sequelize);
const BroadHeatMapData = BroadHeatMapModel(sequelize);
const ThematicHeatMapData = ThematicHeatMapModel(sequelize);
const StrategyHeatMapData = StrategyHeatMapModel(sequelize);
const SectorHeatMapData = SectorHeatMapModel(sequelize);
const UserData = UserModel(sequelize);
const BlogData = BlogModel(sequelize);
const CouponCodeData = CouponCodeModel(sequelize);
const MonthAndWeekData = MonthAndWeekModel(sequelize);

// Object to track connection status
const connection = {};

const Models = {
  StockData,
  HeatMapData,
  BroadHeatMapData,
  ThematicHeatMapData,
  StrategyHeatMapData,
  SectorHeatMapData,
  UserData,
  BlogData,
  CouponCodeData,
  MonthAndWeekData,
};

module.exports = async () => {
  try {
    if (connection.isConnected) {
      console.log('=> Using existing connection.');
      return { pool, sequelize, ...Models };
    }

    // Test the mysql connection pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL: ', err);
        throw err;
      }
      console.log('Connected to MySQL');
      connection.release();
    });

    // Test the Sequelize connection
    await sequelize.authenticate();
    await sequelize.sync();
    connection.isConnected = true;
    console.log('=> Created a new connection.');

    return { pool, sequelize, ...Models };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
