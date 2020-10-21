import axios from 'axios';

const baseUrl = 'http://localhost:3000'
// this is creating an instance of axios
const api = axios.create({
  baseURL: baseUrl
})

export default api;