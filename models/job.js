const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Employer = require('./employer');

const Job = sequelize.define('Job', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    locatiopn: { type: DataTypes.STRING, allowNull: false },
    salaryRange: { type: DataTypes.STRING, allowNull: false },
    ststus: { type: DataTypes.STRING, defaultValue: 'Open' }
});

Job.belongsTo(Employer, { foreignkey: 'employerId', onDelete: 'CASCADE'});

module.exports = Job;