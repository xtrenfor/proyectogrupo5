import mongoose from "../config/mongo_connection";

const profesionalschema= new mongoose.Schema({
    
    Id_cedula_pro:{ type: Number},
    Nombre_pro: {type:  String},
    Celular_pro: {type: Number},
    Correo_pro: {type:  String},
    Horario_pro: {type:  String},
    Dias_lab_pro: {type:  String},
    Rol_pro : {Type: Number},
    Servicios_pro: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "servicio"
        }
    ],

});

const profesional = mongoose.model('profesional', profesionalschema);
export default profesional;