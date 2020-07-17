import Axios from 'axios';
//const backServer = 'http://localhost:3000'
const backServer = 'https://edifly-server.herokuapp.com/';

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