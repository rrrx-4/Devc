import axios from 'axios';
// import { BACKEND_URL } from '../constant';

const axiosInstance = axios.create({
    baseURL: "https://dev-con1.herokuapp.com/"
});

export default axiosInstance;