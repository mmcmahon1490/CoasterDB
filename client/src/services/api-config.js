import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://coasterdb-api-deploy.herokuapp.com/' : 'http://localhost:3000' 
// this is creating an instance of axios
const api = axios.create({
  baseURL: baseUrl
})

export default api;

//deployed link: https://coasterdb-api-deploy.herokuapp.com/