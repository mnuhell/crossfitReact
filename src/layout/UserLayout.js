import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../components/auth/Login';



const UserLayout = ( props ) => {

    const { routes } = props;

    const { checking } = useSelector(state => state.auth);

    if(!checking) {

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
            <div className="user-layout pt-5">
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