import React from 'react';
import Header from '../components/Header'
import { Switch, Route } from 'react-router-dom';
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';



const RoutesApp = () => {

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