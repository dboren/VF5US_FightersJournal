const Character = require('./character');
const CharLog = require('./charLog');
const Combo = require('./combo');
const Note = require('./note');
const { hasMany } = require('./session');
const Session = require('./session');
const User = require('./user');

CharLog.hasMany(Note, {
    foreignKey: 'log_id',
});

Note.belongsTo(CharLog, {
    foreignKey: 'log_id',
});

CharLog.hasMany(Combo, {
    foreignKey: 'log_id',
});

Combo.belongsTo(CharLog, {
    foreignKey: 'log_id',
});

CharLog.hasMany(Session, {
    foreignKey: 'log_id',
});

Session.belongsTo(CharLog, {
    foreignKey: 'log_id',
});

User.hasMany(CharLog, {
    foreignKey: 'user_id',
});

CharLog.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {Character, CharLog, Combo, Note, Session, User}