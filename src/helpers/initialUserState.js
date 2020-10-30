import { useDispatch} from 'react-redux'
import { login } from '../actions/auth';

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
    console.log(user)
    console.log(user.logged)
    if( user.logged === false ) {
        localStorage.setItem('user', JSON.stringify(initialUserState))
        return;
    } else {
        
        dispatch( login(user))
    }

    
}