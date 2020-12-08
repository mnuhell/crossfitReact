import { types } from '../types/types';


export const userActionUpdate = ( user ) => ({

    type: types.updateUser,
    payload: user

})

export const updateUser = ( user ) => {

    return ( dispatch ) => {
        console.log('Enviamos al usuario')
        dispatch( userActionUpdate(user))
        console.log(user);
    }

}