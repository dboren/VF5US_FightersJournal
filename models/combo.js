const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Combo extends Model {}

Combo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ch_only: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        requires_wall: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        input: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hitzone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startup: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        targets: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        misc_notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        log_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'log',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'combo',
    },
);

module.exports = Combo;