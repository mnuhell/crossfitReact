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
                access_token: action.payload.access_token,
                user_id: action.payload.user_id,
                url_avatar: action.payload.url_avatar,
                username: action.payload.username,
                role: {
                    id: action.payload.role.id,
                    name: action.payload.role.name
                },
                token_type: 'Bearer',
                expires_at: action.payload.expires_at,
                logged: true
            }
        }
        case types.logout: {
            return{
                access_token: '',
                user_id: '',
                url_avatar: '',
                username: '',
                role: {
                    id: '',
                    name: 'guestUser'
                },
                token_type: 'Bearer',
                expires_at: '',
                logged: false
            }
        }

        default: 
            return state;
    }

}