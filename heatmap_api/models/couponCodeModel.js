const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        "coupon_code",
        {
            coupon_code: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            discount: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            tableName: "coupon_code",
            engine: "InnoDB",
            timestamps: false,
        }
    );
}