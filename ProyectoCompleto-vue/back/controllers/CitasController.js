const citasModel = require("../models/CitasModel");


module.exports = class BooksController {

  static async getAllCitasAdmin (request, response) {
    try {
      const agendas = await citasModel.find();
      if (agendas != null) {
        response.status(200).json(agendas);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

  static async getAllProfesionales (request, response) {
    try {
      const profesionales = await citasModel.distinct( "Id_cedula_pro" );
      if (profesionales != null) {
        response.status(200).json(profesionales);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

  static async verAgendaProf_01 (request, response) {
    try {
      
      const profesional = "Juan";

      const agendas = await citasModel.aggregate([
          { $match: { Id_cedula_pro : profesional} },
          { "$project": {"_id": 0, "start": "$Inicio", "end":"$Fin"}}]);

      if (agendas != null) {
        response.status(200).json(agendas);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    };
  };

  static async verAgendaProf_02 (request, response) {
    try {
      const agendas = await citasModel.aggregate([
          { $match: { Id_cedula_pro: "Luis" } },
          { "$project": {"_id": 0, "start": "$Inicio", "end":"$Fin"}}]);

      if (agendas != null) {
        response.status(200).json(agendas);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

  static async verAgendaProf_03 (request, response) {
    try {
      const agendas = await citasModel.aggregate([
          { $match: { Id_cedula_pro: "Ana" } },
          { "$project": {"_id": 0, "start": "$Inicio", "end":"$Fin"}}]);

      if (agendas != null) {
        response.status(200).json(agendas);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

  static async insertCita (request, response) {
    try {
      const document = request.body;
      const cita = await citasModel.create(document);
      response.status(200).json(cita);
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  }


}

  