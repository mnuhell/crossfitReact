import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/auth';
import { initialUserState } from '../../helpers/initialUserState';




export const MenuButton = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {

        localStorage.setItem('user', JSON.stringify(initialUserState));
        dispatch( logout(user) )
        history.push('/login')
        
    }
    return (
        <div className="rounded-full h-8 w-8 overflow-hidden">
        <button onClick={ handleLogout }>
            <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                alt="default_user" title={user.name}/>
        </button>
            
        </div>
    )
}