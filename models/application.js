const { DataTypes } = require('sequelize');
const { sequelize } =('../config/db');
const Candidate = require('./candidate');
const Job = require('./job');

const Application = sequelize.define('Application', {
    status: { type: DataTypes.STRING, defaultValue: 'Applied' },
    dateApplied: {type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

Application.belongsTo(Candidate, { foreignKey: 'candidateId', onDelete: 'CASCADE'});
Application.belongsTo(Job, { foreignKey: 'jobId', onDelete: 'CASCADE'});

Model.exports = Application;