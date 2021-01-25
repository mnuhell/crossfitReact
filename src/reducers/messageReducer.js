import {types} from "../types/types";


const initialState = {
    ok: false,
    msg: null,
    userId: null,
    change: false,
}


export const messageReducer = ( state = initialState, action) => {

    switch ( action.type ) {

        case types.validCodeMessage:
            return {
                ...state,
                ok: action.payload.ok,
                msg: action.payload.msg,
                userId: action.payload.userId
            }
        case types.resetCodeValidMessage:
            return {
                ...state,
                change: true
            }

        default:
            return state;

    }


}
