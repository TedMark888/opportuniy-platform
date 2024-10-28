const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('opportunity_portal', 'username', 'new_password', {
    host: 'localhost',
    dialect: 'mysql' // or your preferred dialect
});

module.exports = sequelize;
