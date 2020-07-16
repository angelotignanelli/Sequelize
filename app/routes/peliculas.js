var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculasController');


//Creación
router.get("/crear", peliculasController.crear);
router.post("/crear", peliculasController.guardado);

//Lectura
router.get("/", peliculasController.listado);

//Detalle
router.get("/:id", peliculasController.detalle);

//Actualización
router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

//Borrado
router.post("/borrar/:id", peliculasController.borrar);


module.exports = router;