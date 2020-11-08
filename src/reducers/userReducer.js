import {types} from "../types/types";


export const userReducers = ( state = {}, action ) => {

    switch (action.type) {

        case types.updateUser : {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        }

        default: {
            return state;
        }
    }

}