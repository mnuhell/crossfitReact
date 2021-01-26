import React  from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminHome from '../pages/admin/AdminHome';
import { UserHome } from '../pages/user/UserHome';
import {LoadingApp} from "../components/LoadingApp";
import HeaderLayout from "../components/HeaderLayout";
import Footer from "../components/Footer";




const GuestLayout = (props) => {

    const { routes } = props;

    const { role } = useSelector(state => state.auth);
    const logged = JSON.stringify(localStorage.getItem('login'))

        if( logged !== 'null' ) {
            if( !!role ) {
                if(role.name === 'user' ) {
                    return (
                        <>
                            <Route path="/user" component={UserHome} role={ role.name } />
                            <Redirect to="/user" />
                        </>
                    )
                }

                if(role.name === "admin") {
                    return (
                        <>
                            <Route path="/admin" component={AdminHome} role={ role.name} />
                            <Redirect to="/admin" />
                        </>
                    )
                }

                if(role.name === "superadmin") {
                    return (
                        <>
                            <Route path="/superadmin" component={AdminHome} role={ role.name} />
                            <Redirect to="/superadmin" />
                        </>
                    )
                }
            }


            return (
                <>
                    <div className="guest-layout">
                        <LoadRoutes routes={ routes } />
                    </div>
                </>
            )
        }

    if( logged === 'null'){
        return (
            <>
                <HeaderLayout />
                <div className="guest-layout bg-blue-500">
                    <LoadRoutes routes={ routes } />
                </div>
                <Footer />
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

export default GuestLayout;