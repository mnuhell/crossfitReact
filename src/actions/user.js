import { types } from '../types/types';
import {fetchWithToken} from "../helpers/fetch";


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

const getUsers = (users) => ({

    type: types.usersGetAll,
    payload: users

})