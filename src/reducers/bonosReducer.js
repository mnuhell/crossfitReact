import {types} from "../types/types";


const initialState = {

        bonos: [{
            users: [],
            name: '12 días',
            days: 12,
            precio: 25
        }],

        bonoActive: null
}


export const bonosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.bonoGetAllState:
            return {
                bonos: [ ...action.payload ]
            }

        case types.bonoActive:
            return {
                ...state,
                bonoActive: { ...action.payload }
            }
        case types.bonoReset:
            return {
                ...state,
                bonoActive: null
            }


        default:
            return state

    }


}