import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMBD_API_KEY,
    ACCESS_TOKEN = import.meta.env.VITE_TMBD_ACCESS_TOKEN,
    API_URL = import.meta.env.VITE_TMBD_API_URL;

if(!API_KEY) throw new Error('The API KEY is not defined');

const apiClient = axios.create({
    baseURL: '/api',
    params: {
        language: 'en-US',
    },
    headers: {
        acceppt: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

export default apiClient;
