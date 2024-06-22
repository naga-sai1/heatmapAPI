const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "thematicheatmap",
    {
      Stocks: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Jan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Feb: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Mar: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Apr: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      May: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Jun: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Jul: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Aug: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Sep: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Oct: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Nov: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Dec: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      tableName: "thematicheatmap",
      engine: "InnoDB",
      timestamps: false,
    }
  );
};
