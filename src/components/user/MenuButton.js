import React from 'react';




export const MenuButton = () => {
    
    const handleLogout = () => {
        
        console.log('logout')
        
    }
    
    return (
        <div className="rounded-full h-8 w-8 overflow-hidden">
            <button onClick={ handleLogout }>
                <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                    alt="default_user" title="" />
            </button>
        </div>
    )
}