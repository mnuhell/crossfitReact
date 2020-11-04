import axios from 'axios';
import { initialUserState } from '../../helpers/initialUserState';


const user = (JSON.parse(localStorage.getItem('user')) || initialUserState)

const { access_token } = user;

const token = (access_token) ? `Bearer ${access_token}` : ""

export const AXIOSINSTANCE = axios.create({
    BASE_URL: 'http://localhost/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Vary": "Accept-Encoding, Origin"
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

