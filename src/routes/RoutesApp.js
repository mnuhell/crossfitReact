import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from '../routes/config';

const RoutesApp = () => {
    
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