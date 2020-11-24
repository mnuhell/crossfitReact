import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const MenuButton = () => {
    
    const dispatch = useDispatch();

    const handleLogout = () => {
    
        dispatch( startLogout() );   
    }

    const auth = useSelector(state => state.auth)
    
    return (
        <div className="rounded-full h-8 w-8 overflow-hidden">
            <button onClick={ handleLogout }>
                <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                    alt={ auth.name } title={ auth.name} />
            </button>
        </div>
    )
}