const express = require("express");

const CitasController = require("../controllers/CitasController");

const router = express.Router();

// Rutes Books
router.get('/citas', CitasController.getAllCitasAdmin);
router.get('/citas7', CitasController.getAllProfesionales);

router.get('/citas4', CitasController.verAgendaProf_01);
router.get('/citas5', CitasController.verAgendaProf_02);
router.post('/citas', CitasController.insertCita);

router.get('/citas6', CitasController.verAgendaProf_03);


module.exports = router;