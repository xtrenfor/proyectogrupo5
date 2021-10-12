import httpClient from "./httpClient";

const END_POINT = "/api/citas";

const getAllCitasAdmin = () => httpClient.get(`${END_POINT}2`);
const verAgendaAdmin = () => httpClient.get(END_POINT);
const verAgendaCliente = () => httpClient.get(`${END_POINT}3`);
const verAgendaProf_01 = () => httpClient.get(`${END_POINT}4`);
const verAgendaProf_02 = () => httpClient.get(`${END_POINT}5`);
const verAgendaProf_03 = () => httpClient.get(`${END_POINT}6`);

const insertBook = (book) => httpClient.post(`${END_POINT}`, book);

export {
  verAgendaCliente,
  getAllCitasAdmin,
  verAgendaAdmin,
  
  verAgendaProf_01,
  verAgendaProf_02,
  verAgendaProf_03,

  insertBook,
}