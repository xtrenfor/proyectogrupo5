import mongoose from "../config/mongo_connection";

const servicioSchema= new mongoose.Schema({
    
    Id_codigo_se:{ type: Number},
    Nombre_se: {type: String},
    Costo_se: { type: Number},
    Tiempo_se_minutos: { type: Number},


});

const servicio = mongoose.model('servicio', servicioSchema);
export default servicio;