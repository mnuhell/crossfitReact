import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { startCheking } from '../actions/auth';

import routes from '../routes/config';
import {getBonos} from "../actions/bonos";
import { resetClassDay } from '../actions/events';

const RoutesApp = () => {

    const dispatch = useDispatch();

	dispatch( resetClassDay() )
    useEffect(() => {
        dispatch( getBonos())
		dispatch(startCheking());


	}, [dispatch])



    const { checking } = useSelector( state => state.auth)

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
