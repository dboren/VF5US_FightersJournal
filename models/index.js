const Character = require('./character');
const Log = require('./log');
const Combo = require('./combo');
const Note = require('./note');
const Session = require('./session');
const User = require('./user');

Log.hasMany(Note, {
    foreignKey: 'log_id',
});

Note.belongsTo(Log, {
    foreignKey: 'log_id',
});

Log.hasMany(Combo, {
    foreignKey: 'log_id',
});

Combo.belongsTo(Log, {
    foreignKey: 'log_id',
});

Log.hasMany(Session, {
    foreignKey: 'log_id',
});

Session.belongsTo(Log, {
    foreignKey: 'log_id',
});

User.hasMany(Log, {
    foreignKey: 'user_id',
});

Log.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {Character, Log, Combo, Note, Session, User}