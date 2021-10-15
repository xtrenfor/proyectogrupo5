import httpClient from "./httpClient";

const END_POINT = "/api/citas";

const getAllCitasAdmin = () => httpClient.get(END_POINT);
const getAllProfesionales = () => httpClient.get(`${END_POINT}7`);

const verAgendaProf_01 = () => httpClient.get(`${END_POINT}4`);
const verAgendaProf_02 = () => httpClient.get(`${END_POINT}5`);
const verAgendaProf_03 = () => httpClient.get(`${END_POINT}`);

const insertCita = (cita) => httpClient.post(`${END_POINT}`, cita);



export {

  getAllCitasAdmin,
  getAllProfesionales,
  
  verAgendaProf_01,
  verAgendaProf_02,
  verAgendaProf_03,

  insertCita

}