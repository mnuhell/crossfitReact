import { types } from "../types/types"

const initialState = {
    modalOpen: false,
    showMenu: false,

}

export const uiReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
        case types.uiShowMenu:
            return {
                ...state,
                showMenu: action.payload
            }
        
        default:
            return state;

    }
}