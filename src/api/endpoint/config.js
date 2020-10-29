import axios from 'axios';

export const AXIOSINSTANCE = axios.create({
    BASE_URL: 'http://localhost/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})


//BASE URL
const BASE_URL = 'http://localhost/api';
export const API_BASE_URL = `${BASE_URL}`;

// AUTH URL
export const LOGIN = `${BASE_URL}/users/login`;
export const REGISTER = `${BASE_URL}/users/signup`;

//USERS
