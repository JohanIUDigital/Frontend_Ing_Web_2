import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://proyecto-ing-web-2-1.onrender.com/api'
})