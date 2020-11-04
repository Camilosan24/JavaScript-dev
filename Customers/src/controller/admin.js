const person = require("../model/person");
const adminController = {};

adminController.principalPage = (req, res) => {
	person
		.findAll()
		.then((result) => {
			res.render('index', { bigData: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

adminController.savePerson = (req, res) => {
	let dataBody = req.body;
	if (dataBody.name != "" && dataBody.lastName != "" && dataBody.number != "") {
		person
			.create({
				nombres: dataBody.name,
				apellidos: dataBody.lastName,
				telefono: dataBody.number,
			})
			.then(() => {
				res.redirect("/");
				console.log("Data add excesfully");
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		console.log("No se ingresaron los datos correctamente");
		res.redirect("/");
	}
};

adminController.deletePerson = (req, res) => {
	person
		.findByPk(req.params.id)
		.then((result) => {
			return result.destroy()
		})
		.then(()=>{
			console.log("Data Deleted excesfully")
			res.redirect("/")
		})
		.catch((err) => {
			console.log(err);
		});
};

adminController.editPerson = (req, res) => {
	person
	.findAll()
	.then((result) => {
		res.render('edit-person', { bigData: result });
	})
	.catch((err) => {
		console.log(err);
	});
};

module.exports = adminController;
