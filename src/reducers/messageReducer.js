import {types} from "../types/types";


const initialState = {
    ok: false,
    msg: null,
    userId: null,
    emailCorrect: false,
    change: false,
}


export const messageReducer = ( state = initialState, action) => {

    switch ( action.type ) {

        case types.validCodeMessage:
            return {
                ...state,
                ok: action.payload.ok,
                msg: action.payload.msg,
                userId: action.payload.userId,
                emailCorrect: action.payload.emailCorrect,
                change: action.payload.change
            }
        case types.resetCodeValidMessage:
            return {
                ...initialState,
                change: true
            }

        default:
            return state;

    }


}
