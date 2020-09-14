import axios from 'axios'; 

const instance = axios.create({
    baseUrl: '...' // the API (cloud function) url
}); 


export default instance;