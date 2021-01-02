import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import {LoadingApp} from "../components/LoadingApp";
import {UserHome} from "../pages/user/UserHome";



const UserLayout = ( props ) => {

    const { routes } = props;

    const { checking, checkingFinish, role } = useSelector(state => state.auth);

    if( checkingFinish ) {

        if(!checking) {

            return (
                <>
                    <Route path="/" component={Login} />
                    <Redirect to="/" />
                </>
            )
        }

        if( role.name === 'user') {
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
    }


    return (
        <>
            <>
                <HeaderUser />
                <div className="user-layout pt-5">
                    <LoadRoutes routes={ routes } />
                </div>
                <Footer />
            </>
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