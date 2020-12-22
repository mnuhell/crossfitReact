import {types} from "../types/types";


const initialState = [

        {
            users: [],
            name: '12 días',
            days: 12,
            precio: 25
        }

]


export const bonosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.bonoGetAllState:
            return {
                bonos: [ ...action.payload ]
            }

        default:
            return state

    }


}