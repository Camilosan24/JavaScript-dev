const Sequelize = require('sequelize');

const sequelize = require("../util/database");


const Person = sequelize.define('estudiante',{
	id:{
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	nombres:{
		type: Sequelize.STRING,
		allowNull: false
	},
	apellidos:{
		type: Sequelize.STRING,
		allowNull: false
	},
	telefono:{
		type: Sequelize.STRING,
		allowNull:false
	}
})


module.exports = Person;
