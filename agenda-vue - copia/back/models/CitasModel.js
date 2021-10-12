const mongoose = require("mongoose");

const citasSchema = mongoose.Schema({
    Id_codigo_age: String,
    Inicio: String,
    Fin: String,
    Id_cedula_pro: String,
    Servicio_pro: String,
    Id_cedula_cli: String
});

module.exports = mongoose.model("agendas", citasSchema);