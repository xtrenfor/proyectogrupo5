import mongoose from "../config/mongo_connection";

const Clienteschema= new mongoose.Schema({
    
    Id_cedula_cli:{ type: Number},
    Celular_cli: {type: Number},
    Correo_cli: {type:  String},
    Apellidos_cli: {type:  String},
    Nombres_cli: {type:  String},

});

const Cliente = mongoose.model('Cliente', Clienteschema);
export default Cliente;