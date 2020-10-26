import {types} from '../types/types';

const initialState = {
    name: '',
    app: ''
}

export const authReducer = ( state = initialState, action) => {

    switch(action.type) {

        case types.login: {
            return{
                ...state,
                name: 'manuel'

            }
        }

        default: 
            return state;
    }

}