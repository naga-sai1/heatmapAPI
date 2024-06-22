const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        "blog",
        {
            slno: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image:{
                type: DataTypes.BLOB,
                allowNull: true,
            },
        },
        {
            tableName: "blog",
            engine: "InnoDB",
            timestamps: false,
        }
    );
};