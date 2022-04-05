import axios from 'axios';
// import { BACKEND_URL } from '../constant';

const axiosInstance = axios.create({
    baseURL: "https://main.d3vh9ecp39j6v8.amplifyapp.com"
});

export default axiosInstance;