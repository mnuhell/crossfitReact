import React from 'react';
import Footer from '../components/Footer';
import HeaderAdmin from '../components/HeaderAdmin';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../components/auth/Login';



const AdminLayout = ( props ) => {

    const { routes } = props;

    const { checking, checkingFinish } = useSelector(state => state.auth);

    if( checkingFinish ) {

        if(!checking) {

            return (
                <>
                    <Route path="/" component={Login} />
                    <Redirect to="/" />
                </>
            )
        }


    }

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