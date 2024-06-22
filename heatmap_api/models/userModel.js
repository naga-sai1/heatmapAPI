const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "users",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_subscribed: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "users",
      engine: "InnoDB",
      timestamps: false,
    }
  );
};
