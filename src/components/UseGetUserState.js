import React from 'react';
import { useSelector } from 'react-redux'


const UseGetUserState = () => {
    const user = useSelector(state => state.auth);
    console.log(user);
    //const { access_token } = user

    
    return (

        <div className="">
            { user}
        </div>

    )
}

export default UseGetUserState;