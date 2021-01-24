import {types} from "../types/types";


const initialState = {
    ok: false,
    msg: null,
    userId: null
}


export const messageReducer = ( state = initialState, action) => {

    switch ( action.type ) {

        case types.validCodeMessage:
            return {
                ...state,
                ok: action.payload.ok,
                msg: action.payload.msg,
                userId: action.payload.user
            }

        default:
            return state;

    }


}
