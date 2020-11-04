const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"estudiantesdb",
	"root",
	"Cs2410200110020142sC",{
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;
