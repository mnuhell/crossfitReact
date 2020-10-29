import React from 'react'
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({isAuthenticated, roleAdmin, component: Component, restricted, ...rest}) => {
    
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            (roleAdmin === 'admin' || roleAdmin === 'superadmin') ? 
                <Redirect to="/admin/dashboard" />
                :
                <Redirect to="/user/page" />
        )} />
    );
};

export default PublicRoute;

// export const PublicRoute = () => {

//     return (
//         <>
//             <Route 
//             path="/"
//             exact
//             component={Home} />

//             <Route
//             path="/login"
//             exact
//             component={Login} />

//             <Route
//             path="/register"
//             exact
//             component={Register} />

//         </>
//     )
// }