const express = require("express");

const CitasController = require("../controllers/CitasController");

const router = express.Router();

// Rutes Books
router.get('/citas2', CitasController.getAllCitasAdmin);
router.get('/citas', CitasController.verAgendaAdmin);
router.get('/citas3', CitasController.verAgendaCliente);
router.get('/citas4', CitasController.verAgendaProf_01);
router.get('/citas5', CitasController.verAgendaProf_02);
router.get('/citas6', CitasController.verAgendaProf_03);

router.post('/books', CitasController.insertBook);

module.exports = router;