import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Dashboard } from '../components/admin/Dashboard';
import axios from 'axios';
import Page from '../components/user/Page';
import { UserStateLocal } from '../helpers/initialUserState';

const RoutesApp = () => {
    
    UserStateLocal();

    const state = useSelector( state => state.auth)
    const { access_token, logged } = state;
    
    (access_token ) ? axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` : axios.defaults.headers.common['Authorization'] = null;
    
    return (
        <>
        <Header />
        <Switch>
        
          <PublicRoute restricted={logged} component={Home} path="/" exact/>
          <PublicRoute restricted={logged} component={Login} path="/login"/>
          <PublicRoute restricted={logged} component={Register} path="/register" />
          
            <PrivateRoute isAutenticated={logged} component={Dashboard} path="/admin/dashboard" exact />
            <PrivateRoute isAutenticated={logged} component={Page} path="/user" exact />
        
        </Switch>
        </>
    )
}

export default RoutesApp;