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
        //console.log(user);
    }

}

export const getAllUsers = () => {

    return async( dispatch ) => {

        try{
            const resp = await fetchWithToken('users');
            const body = await resp.json();
            console.log(body)

            dispatch( getUsers( body.usersFilter ) )



        } catch (error) {

            console.log(error)
        }

    }
}

const getUsers = (usersFilter) => ({

    type: types.usersGetAll,
    payload: usersFilter

})