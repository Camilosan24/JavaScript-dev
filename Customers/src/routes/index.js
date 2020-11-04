const { Router } = require('express');
const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

//cargar datos pagina principal
router.get('/',adminController.principalPage);

//añadir una persona a la base de datos
router.post('/create-person',adminController.savePerson);

//eliminar de la base de datos
router.get('/delete-person/:id',adminController.deletePerson);


//pagina de actualizar un dato
router.get('/edit-person/:id',adminController.editPerson);

module.exports = router;