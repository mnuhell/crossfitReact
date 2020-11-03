import React, { useReducer } from 'react';
import '../src/assets/scss/styles.scss';
import { AuthContext } from '../src/context/AuthContext';
import { authReducer } from './reducers/authReducer';
import RoutesApp from './routes/RoutesApp';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false} 
}

const CrossfitApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <RoutesApp /> 
        </AuthContext.Provider>
            
    )
}

export default CrossfitApp;