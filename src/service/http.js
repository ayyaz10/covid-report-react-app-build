import axios from "axios";
// const data_url = "https://covid-19-node-app.herokuapp.com";
const data_url = "http://localhost:3333";


const covid_config = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    'X-RapidAPI-Key': 'd89e92b60emsh6ce448c7f44e1edp16dd17jsn866e60a9c9bb'
  }
}


export const Covid = {
  getData: function () {
    return axios.request(covid_config)
  }
}


export const PatientApi = {
  getData: function () {
    return axios.get(data_url);
  },
  sendData: function (data) {
    return axios.post(`${data_url}/patients`, data);
  },
  updateData: function (id, data) {
    return axios.put(`${data_url}/updatePatient/${id}`, data);
  },
  deleteData: function (id) {
     return axios.delete(`${data_url}/patients/${id}`);
  }
}

// export function getData() {
//   return axios.get(data_url);
// }

// export function sendData(data) {
//   // console.log(data)
//   return axios.post(`${data_url}/patients`, data);
// }

// export function updateData(id, data) {
//   return axios.put(`${data_url}/updatePatient/${id}`, data);
// }

// export function deleteData(id) {
//   return axios.delete(`${data_url}/patients/${id}`);
// }