import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const SuperAdminRoutes = ({isAutenticated, component: Component, ...rest}) => {
    
    return (

        
        <Route {...rest} render={props => (
            isAutenticated  ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default SuperAdminRoutes;