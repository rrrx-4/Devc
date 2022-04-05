import axios from 'axios';
// import { BACKEND_URL } from '../constant';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/"
});

export default axiosInstance;