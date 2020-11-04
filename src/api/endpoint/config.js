import axios from 'axios';
import { initialUserState } from '../../helpers/initialUserState';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || initialUserState 
}

const { access_token } = init;


export const AXIOSINSTANCE = axios.create({
    BASE_URL: 'http://localhost/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    },
})


//BASE URL
const BASE_URL = 'http://localhost/api';
export const API_BASE_URL = `${BASE_URL}`;

// AUTH URL
export const LOGIN = `${BASE_URL}/users/login`;
export const REGISTER = `${BASE_URL}/users/signup`;

//clases
export const LESSONS = `${BASE_URL}/clases`;

