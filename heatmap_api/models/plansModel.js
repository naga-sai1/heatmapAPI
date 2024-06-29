const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "plans",
        {
            sl_no: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            months: {
                type: DataTypes.INTEGER,
            },
            amount: {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: "plans",
            engine: "InnoDB",
            timestamp: false,
        }
    );
};