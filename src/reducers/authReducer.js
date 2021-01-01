import { types } from "../types/types";

const initialState = {
    checking: true,
}

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.authLogin: 
            return {
                ...state,
                checking: true,
                ...action.payload
            }
        case types.authCheckingFinish: 
            return {
                ...state,
                checking: true
            }
        case types.authLogout: 
            return {
                checking: false
            }
        
        default:
            return state;
        
    }

}