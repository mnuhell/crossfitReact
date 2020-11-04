import {types} from '../types/types';

const initialState = {
    access_token: '',
    user_id: '',
    url_avatar: '',
    username: '',
    role: {
        id: 0,
        name: ''
    },
    token_type: 'Bearer',
    expires_at: '',
    logged: false
}

export const authReducer = ( state = initialState, action) => {

    switch(action.type) {
        case types.login: {

            return{
                ...action.payload,
                logged: true
            }
        }
        case types.logout: {
            return{
                ...action.payload,
                logged: false
            }
        }

        default: 
            return state;
    }

}