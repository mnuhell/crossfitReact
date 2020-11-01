import {types} from '../types/types';

const initialState = []

export const claseReducers = ( state = initialState, action) => {
    
    switch( action.type) {
        case types.savedClases: {
            return [...state, action.payload]
        }
        default: 
            return state
    }
}