import { types } from '../types/types';
import {fetchWithToken} from "../helpers/fetch";
import Swal from "sweetalert2";


export const userActionUpdate = ( user ) => ({

    type: types.updateUser,
    payload: user

})

export const updateUser = ( user ) => {

    return async( dispatch ) => {

        try{
            const resp = await fetchWithToken( `users/update-user/${user._id}`, user, 'PUT')
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Usuarios',
                    text: body.msg,
                })
            }

            if( body.ok ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuarios',
                    text: body.msg,
                })

                dispatch( getAllUsers())
            }



        } catch ( error ) {

            console.log( error )
        }

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
            const resp = await fetchWithToken(`users/add-bono-user/${user.userId}/${user.bonoIdHistory}`, user, 'PUT');
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Bono',
                    text: body.msg,
                })
            }

            Swal.fire({
                icon: 'success',
                title: 'Bono',
                text: body.msg,
            })

            dispatch( userActiveState( body.userActive ))
            dispatch( getAllUsers())

        } catch ( error ) {
            console.log( error )
        }

    }
}

export const setUserActive = ( user ) => {

    return async ( dispatch ) => {
        dispatch(  userActiveState( user ))
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

export const deleteBonoUserModal = ( user ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken(`users/delete-bono-user/${user.user._id}/${user.bonoId}`, user, 'PUT');
            const body = await resp.json();

            if( !body.ok ) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Bono',
                    text: body.msg,
                })


            }

            Swal.fire({
                icon: 'success',
                title: 'Bono',
                text: body.msg,
            })

            dispatch( deleteBonoUserModalState( body.user ))
            dispatch( getAllUsers())

        } catch ( error ) {
            console.log( error )
        }

    }

}

const deleteBonoUserModalState = ( user ) => ({
    type: types.userDeleteBono,
    payload: user
})


export const getActionsCountClassesPendingMonthAdmin = ( id ) => {

	return async (dispatch) => {

		try {

			const resp = await fetchWithToken(`bonos/count-classes/${id}`, {id}, 'PUT');
			const body = await resp.json();

			dispatch( getAllUsers())

		} catch (error) {

			console.log( error )
		}
	}
}

export const addDateClassDay = ( ) => ({
    type: types.addDateClassDayUser,
})

export const deleteDateClassDayActions = ( ) => ({
    type: types.deleteDateClass,
})

export const getActionsCountClassesPendingMonthAdminAll = () => {

	return async (dispatch) => {

		try {

			const resp = await fetchWithToken(`bonos/count-classes`);
			const body = await resp.json();

			dispatch( getAllUsers())

		} catch (error) {

			console.log( error )
		}


	}
}

const pendingClassAdmin = (user) => ({

	type: types.classPendingUserAdmin,
	payload: user

})
