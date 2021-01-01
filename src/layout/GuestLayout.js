import React  from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminHome from '../pages/admin/AdminHome';
import { UserHome } from '../pages/user/UserHome';




const GuestLayout = (props) => {

    const { routes } = props;

    const { role } = useSelector(state => state.auth);

    if (!!role) {

        if(role.name === 'user') {
            return (
                <>
                    <Route path="/user" component={UserHome} />
                    <Redirect to="/user" />
                </>
            )
        }
   
        if(role.name === "admin") {
            return (
                <>
                    <Route path="/admin" component={AdminHome} />
                    <Redirect to="/admin" />
                </>
            )
        }
   
        if(role.name === "superadmin") {
            return (
                <>
                   <Route path="/superadmin" component={AdminHome} />
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