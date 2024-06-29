const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
        type: DataTypes.BOOLEAN,
      },
      subscribe_expired_on: {
        type: DataTypes.DATE,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
      },
      subscribed_on: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "users",
      engine: "InnoDB",
      timestamps: false,
    }
  );
};
