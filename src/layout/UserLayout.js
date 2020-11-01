import React from 'react';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../components/auth/Login';



const UserLayout = ( props ) => {

    const { routes } = props;

    const user = useSelector( state => state.auth);
    
    if(!user.logged) {
        return (
            <>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
            </>
        )
    }
    
    return (
        <>
        <HeaderUser />
        <div className="user-layout">
            <LoadRoutes routes={ routes } />
        </div>
        <Footer />
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

export default UserLayout;