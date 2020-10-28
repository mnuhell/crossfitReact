import React from 'react'
import { useSelector } from 'react-redux';




export const MenuButton = () => {

    const username = useSelector(state => state.auth.username);
    
    return (
        <div className="rounded-full h-8 w-8 overflow-hidden">
            <img className=" bg-cover " src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                alt="default_user" title={username}/>
        </div>
    )
}