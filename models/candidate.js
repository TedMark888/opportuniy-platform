const { DataTypes } = require('sequelize');
const { sequuelize } = require('../config/db');

const Candidate = sequelize.define('Candidate', {
    name: { type: DataTypes.STTING, allowNull: false },
    email: { type: DataTypes.STRING, alloNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    skills: { type: DataTYpe.STRING, allowNull: false }
});

module.exports = Candidate;