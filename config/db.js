const  { Sequelize }  = require('sequelize');
require('dotenv').config();

//New instance of seqeulize connected to MySQL database
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false,
})

//Test Connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connection');
    } catch (err) {
        console.error('Unable to connect to database:', err);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };