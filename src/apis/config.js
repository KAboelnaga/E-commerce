import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_BASE_URL
    }
);
 console.log("Base URL:", import.meta.env.VITE_APP_BASE_URL);
export default axiosInstance;