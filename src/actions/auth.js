import {types} from '../types/types';


export const login = ( user ) => ({
        
        type: types.login,
        payload: user
})

export const persistLogin = ( user ) => ({
        
        type: types.persistLogin,
        payload: user
})

export const logout = ( initialUserState ) => ({

        type: types.logout,
        payload: initialUserState
})