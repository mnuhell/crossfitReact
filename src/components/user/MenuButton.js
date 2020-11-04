import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { logout } from '../../actions/auth';
import { initialUserState } from '../../helpers/initialUserState';
import { AuthContext } from '../../context/AuthContext';




export const MenuButton = () => {

    const { dispatch, user } = useContext(AuthContext);
    const history = useHistory();
    
    const handleLogout = () => {
        
        localStorage.setItem('user', JSON.stringify(initialUserState));
        dispatch( logout(initialUserState) )
        history.replace('/login')
        
    }
    
    return (
        <div className="rounded-full h-8 w-8 overflow-hidden">
            <button onClick={ handleLogout }>
                <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                    alt="default_user" title={user.username}/>
            </button>
        </div>
    )
}