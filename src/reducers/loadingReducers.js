import {types} from '../types/types';

const initialState = {
    active: false
}

export const loadingReducers = (state = initialState, action) => {

    switch(action.type) {
        case types.loading: {
            return {
                active: action.payload
            }
        }
        default:
        return state
    }
}