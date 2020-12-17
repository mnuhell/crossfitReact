import {types} from "../types/types";


const initialState = {

    bonos: [{
            users: [],
            name: '12 días',
            days: 12,
            precio: 25
        }]

}


export const bonosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.bonoGetAll:
            return {
                ...state.bonos,
                bonos: [
                    ...action.payload
                ]
            }

        default:
            return state

    }


}