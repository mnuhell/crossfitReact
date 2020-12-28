import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startCheking } from '../actions/auth';

import routes from '../routes/config';
import {getBonos} from "../actions/bonos";

const RoutesApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getBonos())
        dispatch(startCheking());

    }, [dispatch])

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