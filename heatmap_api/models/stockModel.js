const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "stock_data",
    {
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tri__Nifty_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Next_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__Nifty_Midcap_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMLCAP_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMLCAP_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Nifty_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      Nifty_200: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      NIFTY_MICROCAP_250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      NIFTY_TOTAL_MARKET: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDCAP_150: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_MIDSMALLCAP_400: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_500: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_50: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_LARGEMIDCAP_250: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      tri__NIFTY_SMALLCAP_100: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      tableName: "stock_data",
      engine: "InnoDB",
      timestamps: false,
    }
  );
};
