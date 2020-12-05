import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';


export const eventAddNew = (event) => ({

    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({

    type: types.eventSetActive,
    payload: event
});


export const eventStartLoading = () => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('events');
            const body = await resp.json();

            const events = body.events;
            dispatch( eventLoaded(events) )

        } catch (error) {
            console.log(error)
        }
    }
}

export const addUserClass = (event) => {

    return async(dispatch) => {

        try {
            const resp = await fetchWithToken(`events/add-user/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.create) {
                Swal.fire({
                    title: 'Apuntado',
                    text: `${body.msg}`,
                    icon: 'success',
                    confirmButtonText: 'Salir'
                })
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteUserClass = (event) => {

    return async (dispatch) => {

        try {

            const resp = await fetchWithToken(`events/delete-user/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                Swal.fire({
                    title: 'borrado',
                    text: `${body.msg}`,
                    icon: 'success',
                    confirmButtonText: 'Salir'
                });
            }

        } catch(error) {
            console.log(error)
        }
    }

}


const eventLoaded = ( events ) => ({

    type: types.eventStartLoading,
    payload: events

})


export const getClasesPendingUser = () => {

	return async(dispatch) => {

		try {

			const resp = await fetchWithToken('bonos/count-classes');
			const clases = await resp.json();
			if (!clases.ok) {
				Swal.fire({

                    title: 'Error con los bonos',
                    text: `${clases.msg}`,
                    icon: 'error',
                    confirmButtonText: 'Salir'
                })

			}

			const { totales } = clases
            dispatch( classesPending(totales) )


		} catch (error) {
			console.log(error)
		}
	}
}

const classesPending = (totales) => ({

	type: types.bonoGetAll,
	payload: totales

});





