import React from 'react';
import Footer from '../components/Footer';
import HeaderAdmin from '../components/HeaderAdmin';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../components/auth/Login';
import HeaderUser from "../components/HeaderUser";
import {LoadingApp} from "../components/LoadingApp";
import {UserHome} from "../pages/user/UserHome";



const AdminLayout = ( props ) => {

    const { routes } = props;

    const { checking, checkingFinish, role, uid } = useSelector(state => state.auth);

    if( checkingFinish ) {

        if(!checking) {

            return (
                <>
                    <Route path="/" component={Login} />
                    <Redirect to="/" />
                </>
            )
        }

        if( role.name === 'admin') {
            return (
                <>
                    <HeaderAdmin />
                    <div className="admin-layout">
                        <LoadRoutes routes={ routes } />
                    </div>
                    <Footer />
                </>
            )
        }

    }

    if( !uid ) {
        return (
            <>
                <Route path="/user" component={UserHome} />
                <Redirect to="/user" />
            </>
        )
    }
    return (

        <>
            <LoadingApp />
        </>
    )

} 

function LoadRoutes({routes}) {

    return (
        <Switch>
            {
                routes.map( (route, index ) => (
                <Route 
                key={ index }
                path={ route.path }
                exact={ route.exact }
                component={ route.component }
                />
                ))
            }
        </Switch>
    )
    
}

export default AdminLayout;