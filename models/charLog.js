const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterLog extends Model {}

CharacterLog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true,
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        hours_played: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        character_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'character',
                key: 'id',
            },
        },
        character_name: {
            type: DataTypes.STRING,
            references: {
                model: 'character',
                key: 'name',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'charLog',
    }
);

module.exports = CharacterLog;