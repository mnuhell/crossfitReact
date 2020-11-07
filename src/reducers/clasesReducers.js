import {types} from '../types/types';

const initialState = []

export const claseReducers = ( state = initialState, action) => {
    
    switch( action.type) {
        case types.getClases: {
            return [...state, action.payload]
        }
        case types.updateClase: {
            return {
                ...state,
                users: [...state, action.payload]
            }
        }

        default: 
            return state
    }
}