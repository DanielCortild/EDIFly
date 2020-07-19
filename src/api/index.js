import Axios from 'axios';
import download from 'downloadjs';

// const backServer = 'http://localhost:3000'
const backServer = 'https://edifly.herokuapp.com/';
// const backServer = 'https://no.com';

export const fetchData = async () => {
  let {data} = await Axios.get(`${backServer}/api`);
  return(data);
}

export const fetchUsers = async () => {
  let {data} = await Axios.get(`${backServer}/users.json`);
  return(data);
}

export const fetchTeamMembers = async () => {
  let {data} = await Axios.get(`${backServer}/teams.json`);
  return(data);
}

export const fetchTestimonials = async () => {
  let {data} = await Axios.get(`${backServer}/testimonials.json`);
  return(data);
}

export const fetchDownloads = async () => {
  let {data} = await Axios.get(`${backServer}/downloads.json`);
  return(data);
}

export const downloadFiles = (filename, file_url) => {
  var XML = new XMLHttpRequest();
  XML.open( "GET", file_url , true);
  XML.responseType = "blob";
  XML.onload = e => download(e.target.response, filename);
  XML.send();
}