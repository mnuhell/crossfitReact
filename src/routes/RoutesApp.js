import { useSelector } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { UserStateLocal } from '../helpers/initialUserState';

import routes from '../routes/config';

const RoutesApp = () => {
    
    const userState = useSelector( state => state.auth);
   
    UserStateLocal();
    
    const { access_token }= userState;
    
    (access_token ) ? axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` : axios.defaults.headers.common['Authorization'] = null;
    
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