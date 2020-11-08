import { types } from '../types/types';


export const userActionUpdate = ( user ) => ({

    type: types.updateUser,
    payload: user

})

export const updateUser = ( user ) => {

    return ( dispatch ) => {
        // ENviamos los datos al back con una peticion POST
        console.log('Enviamos al usuario')
        dispatch( userActionUpdate(user))
        console.log(user);
    }




}