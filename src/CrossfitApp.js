import React, { useReducer, useEffect } from 'react';
import '../src/assets/scss/styles.scss';
import { AuthContext } from '../src/context/AuthContext';
import RoutesApp from './routes/RoutesApp';
import { initialUserState } from '../src/helpers/initialUserState';
import { authReducer } from './reducers/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || initialUserState 
}

const CrossfitApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <RoutesApp /> 
        </AuthContext.Provider>
            
    )
}

export default CrossfitApp;