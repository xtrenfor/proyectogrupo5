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
  

  static async verAgendaAdmin (request, response) {
    try {
      const agendas = await citasModel.aggregate([

        { "$project": {"_id": 0, "name": "$Id_cedula_pro", "start": "$Inicio", "end":"$Fin"}}]);

      if (agendas != null) {
        response.status(200).json(agendas);
      } else {
        response.status(404).json();
      }
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

  static async verAgendaCliente (request, response) {
    try {
      const agendas = await citasModel.aggregate([
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

  static async verAgendaProf_01 (request, response) {
    try {
      const agendas = await citasModel.aggregate([
          { $match: { Id_cedula_pro: "Juan" } },
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

  static async insertBook (request, response) {
    try {
      const document = request.body;
      // Validar la estructura del documento y los tipos de datos
      const book = await booksModel.create(document);
      response.status(200).json(book);
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };

}