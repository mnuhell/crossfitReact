import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { persistLogin } from '../actions/auth';

export const initialUserState = {
        access_token: '',
        user_id: '',
        url_avatar: '',
        username: '',
        role: {
            id: 0,
            name: 'guestUser'
        },
        token_type: 'Bearer',
        expires_at: '',
        logged: false
}

export const UserStateLocal = () => {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('user'));
    const [persist, setPersist] = useState(false)
    
    if(!persist){
        dispatch( persistLogin(user) )
        setPersist(true)
    }
}

