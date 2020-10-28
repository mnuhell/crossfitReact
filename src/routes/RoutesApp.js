import React, { useEffect } from 'react';
import Header from '../components/Header'
import { login } from '../../src/actions/auth'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import axios from 'axios';



const RoutesApp = () => {

    const dispatch = useDispatch();
    
    useEffect( () => {
        const usuario  =  localStorage.getItem('user');
        const { access_token } = JSON.parse(usuario);
    
        if(access_token){
            const AUTH_TOKEN = access_token;
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            axios.defaults.headers.common['Authorization'] = 'Bearer';
            dispatch( login(JSON.parse(usuario)))
        }

    }, []) 


    return (
        <>
        <Header />
        <Switch>
            <Route 
            path="/"
            exact
            component={Home} />

            <Route
            path="/login"
            component={Login} />

            <Route
            path="/register"
            component={Register} />

        </Switch>
        </>
    )
}

export default RoutesApp;