import React from 'react';
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import UserRoute from './UserRoute';
import {Home} from '../components/Home'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import axios from 'axios';
import { UserStateLocal } from '../helpers/initialUserState';
import { User } from '../pages/user/User';
import { Admin } from '../pages/admin/Admin';
import { SuperAdmin } from '../pages/superadmin/SuperAdmin';
import AdminRoute from './AdminRoute';
import SuperAdminRoutes from './SuperAdminRoutes';

const RoutesApp = () => {
    
    UserStateLocal();

    const state = useSelector( state => state.auth)
    const { access_token, logged, role } = state;

    (access_token ) ? axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` : axios.defaults.headers.common['Authorization'] = null;
    
    return (
        <>
        
        <Switch>

           
          <PublicRoute restricted={logged} role={role.name} component={Home} path="/" exact/>
          <PublicRoute restricted={logged} role={role.name} component={Login} path="/login"/>
          <PublicRoute restricted={logged} role={role.name} component={Register} path="/register" />
        

            { (logged) ?  <Header /> : ""} 
            <UserRoute isAutenticated={logged} component={User} path="/user" exact />
            <AdminRoute isAutenticated={logged} component={Admin} path="/admin" exact />
            <SuperAdminRoutes isAutenticated={logged} component={SuperAdmin} path="/superadmin" exact />
          
        </Switch>
        </>
    )
}

export default RoutesApp;