const { Sequelize } = require("sequelize");
const StockModel = require("../models/stockModel");
const HeatMapModel = require("../models/heatMapModel");
const BroadHeatMapModel = require("../models/broadHeatMapModel");
const ThematicHeatMapModel = require("../models/thematicHeatMapModel");
const StrategyHeatMapModel = require("../models/strategyHeatMapModel");
const SectorHeatMapModel = require("../models/sectorHeatMapModel");
const UserModel = require("../models/userModel");
const BlogModel = require("../models/blogModel");
const CouponCodeModel = require("../models/couponCodeModel");
const MonthAndWeekModel = require("../models/monthAndWeekModel");

const sequelize = new Sequelize("u276789778_stocks", "u276789778_stocks", "123@Mango", {
  dialect: "mysql",
  host: "62.72.28.52",
  port: 3306,
  ssl: true,
  logging: false,
});

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
      console.log("=> Using existing connection.");
      return { sequelize, ...Models };
    }

    await sequelize.sync();
    await sequelize.authenticate();
    connection.isConnected = true;
    console.log("=> Created a new connection.");
    return { sequelize, ...Models };
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
