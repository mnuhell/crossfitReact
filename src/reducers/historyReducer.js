import {types} from "../types/types";


const initialState = {

    user: '',
    bono: '',
    start: new Date(),
    end: ''

}

export const historyReducer = ( state = initialState, action) => {

    switch ( action.type) {

        case types.historyBonoReset:
            return {
                ...state,
                end: action.payload
            }

        default:
            return state

    }


}