import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminHome from '../pages/admin/AdminHome';



const GuestLayout = ( props ) => {

    const { routes } = props;

    const user = useSelector( state => state.auth);

    if(user.logged && user.role.name === "user") {
        return (
            <>
                <Route path="/admin" component={AdminHome} />
                <Redirect to="/admin" />
            </>
        )
    }

    return (
        <>
            <div className="guest-layout">
                <LoadRoutes routes={ routes } />
            </div>
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

export default GuestLayout;