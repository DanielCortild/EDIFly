import Axios from 'axios';
//const backServer = 'http://localhost:3000'
const backServer = 'https://edifly-server.herokuapp.com/';

export const fetchUsers = async () => {
  let {data} = await Axios.get(`${backServer}/clients.json`);
  return(data);
}