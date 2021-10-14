import mongoose from "../config/mongo_connection";

const Agendasschema = new mongoose.Schema({
    
    Id_codigo_age: { type: String},
    Id_cedula_cli: { type: String},
    Id_cedula_pro:{ type: String},
    Servicio_pro:{ type: String},
    Inicio: { type: String},
    Fin: { type: String},
    
});

const Agendas = mongoose.model('agendas', Agendasschema);
export default Agendas;
