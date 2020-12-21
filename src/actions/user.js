import { types } from '../types/types';
import {fetchWithToken} from "../helpers/fetch";
import Swal from "sweetalert2";


export const userActionUpdate = ( user ) => ({

    type: types.updateUser,
    payload: user

})

export const updateUser = ( user ) => {

    return ( dispatch ) => {
        console.log('Enviamos al usuario')
        dispatch( userActionUpdate(user))
    }

}

export const getAllUsers = () => {

    return async( dispatch ) => {

        try{
            const resp = await fetchWithToken('users/get-users-bono');
            const body = await resp.json();

            dispatch( getUsers( body.users ) )

        } catch (error) {

            console.log(error)
        }

    }
}

export const addBonoToUser = ( user ) => {

    return async( dispatch ) => {

        try {
            const resp = await fetchWithToken(`users/add-bono-user/${user.userActive._id}/${user.bono}`, user, 'PUT');
            const body = await resp.json();

            Swal.fire({
                icon: 'success',
                title: 'Bono',
                text: body.msg,
            })

            dispatch( getAllUsers())
              setTimeout( function() {
                  dispatch( userActive( body.userActive ))
              }, 500)

        } catch ( error ) {
            console.log( error )
        }

    }
}

const refreshActiveUser = (userActive) => ({

    type: types.userRefreshUserActive,
    payload: userActive

})

export const userActive = ( user ) => {

    return async ( dispatch ) => {
        dispatch( userActiveState( user ))
    }
}

const userActiveState = ( user ) => ({

    type: types.userActive,
    payload: user
})

const getUsers = (users) => ({

    type: types.usersGetAll,
    payload: users

})