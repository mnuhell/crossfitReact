import { types } from "../types/types";

const initialState = {
    checking: false,
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
                checkingFinish: true
            }
        case types.authLogout: 
            return {
                checking: false,
                checkingFinish: true
            }
        
        default:
            return state;
        
    }

}