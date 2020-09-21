import Axios from 'axios';
import download from 'downloadjs';

//const backServer = 'http://x.edifly.com';
const backServer = 'http://localhost:3000';

export const fetchData = async () => {
  let {data} = await Axios.get(`${backServer}/api`);
  return(data);
}

export const downloadFiles = (filename, file_url) => {
  var XML = new XMLHttpRequest();
  XML.open( "GET", file_url , true);
  XML.responseType = "blob";
  XML.onload = e => download(e.target.response, filename);
  XML.send();
}

export const postDownloadedFile = async (props) => {
  await Axios.post(`${backServer}/downloaded_files`, {downloaded_file: props})
    .catch(error => console.log(error));
}

export const postMessage = async (props) => {
  await Axios.post(`${backServer}/messages`, {message: props})
    .catch(error => console.log(error));
}