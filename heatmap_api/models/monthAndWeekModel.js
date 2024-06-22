const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        "month_and_week",
        {
            stocks: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            prev_month: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            current_week: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "month_and_week",
            engine: "InnoDB",
            timestamps: false,
        }
    );
}