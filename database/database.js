const Sequelize = require("sequelize");

const connection = new Sequelize('crudblog', 'root', '3103Lucas@',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;