import axios from "axios";
const data_url = "https://covid-19-node-app.herokuapp.com";

export function getData() {
  return axios.get(data_url);
}

export function sendData(data) {
  // console.log(data)
  return axios.post(`${data_url}/patients`, data);
}

export function updateData(id, data) {
  return axios.put(`${data_url}/updatePatient/${id}`, data);
}

export function deleteData(id) {
  return axios.delete(`${data_url}/patients/${id}`);
}