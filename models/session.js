const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Session extends Model {}

Session.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    activity: {
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
        modelName: 'session',
    }    
);

module.exports = Session;

