import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch} from 'react-redux'
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Dashboard } from '../components/admin/Dashboard';
import { login } from '../../src/actions/auth';
import axios from 'axios';
import Page from '../components/user/Page';
import { initialUserState } from '../helpers/initialUserState';

const RoutesApp = () => {
    let user = localStorage.setItem('user', JSON.stringify(initialUserState))
    user = JSON.parse(localStorage.getItem('user'));
    const { access_token, role } = user;
    const [ logged, setLogged ] = useState(false);
    const [ roleName, setRoleName ] = useState('user');
    const dispatch = useDispatch();

    useEffect( () => {
        if(user) {
            if( access_token ){
                axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                dispatch( login(user))
                setLogged(true)
                setRoleName(role.name)
            } else{
                axios.defaults.headers.common['Authorization'] = null;
                setLogged(false)
            }
        }
    }, [user, dispatch, logged, access_token, role.name])

    
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