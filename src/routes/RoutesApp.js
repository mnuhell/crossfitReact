import React, { useEffect } from 'react';
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';



const RoutesApp = () => {

    const usuario = useSelector( state => state.auth)

    useEffect(() => {
        console.log(usuario)
        
    }, [usuario])


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