import axios from 'axios';

const endPoint = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

export {    apiKey, endPoint };

    export const axiosInstance = axios.create({
        baseURL: endPoint,
        params: {
            key:apiKey,
        }
    });


