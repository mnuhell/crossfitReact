import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startCheking } from '../../src/actions/auth';

import routes from '../routes/config';

const RoutesApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(startCheking())
        
    }, [dispatch])

    const { cheking, uid, role } = useSelector(state => state.auth);

    if (cheking) {
        return (
            <h5 className="mb-20"> Espere </h5>
        )
    }

    return (
        <>
        <Router>
        { 
        
        <Switch>

            { 
                routes.map( (route, index) => (
                    <RouteWithSubRoutes key={index} {...route} />
                ))
            }

        </Switch>
        }
        </Router>
        </>
    )
    
}

function RouteWithSubRoutes(route) {
    
    return (
        <Route
        path = {route.path} 
        exact = { route.exact}
        render = { props => <route.component routes={route.routes} {...props} />}
        />
    )
}

export default RoutesApp;