const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Employer = sequelize.define('Employer', {
    name: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false}
});

module.exports = Employer;