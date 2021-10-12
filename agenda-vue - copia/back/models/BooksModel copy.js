const mongoose = require("mongoose");

const agendasSchema = mongoose.Schema({
    Id_codigo_age : String,
    Id_cedula_pro: String,
    Servicio_pro: String,
    Fecha : Date,
    Id_cedula_cli: String
});

module.exports = mongoose.model("agendas", agendasSchema);