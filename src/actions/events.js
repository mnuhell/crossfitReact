import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import {prepareEvents} from "../helpers/prepareEvents";
import Swal from "sweetalert2";
import moment from 'moment'
import {uiCloseModal} from "./ui";


export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const savedNewEvent = ( event ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken( 'events', event, 'POST');
            const body = await resp.json();

            if( body.ok ) {
                dispatch( eventAddNew( body.events ));
                dispatch( uiCloseModal())

                Swal.fire({
                    icon: 'success',
                    title: 'Clase',
                    text: 'Clase creada con exito',
                })
            }


        } catch ( error ) {
            console.log( error )
        }

    }
}


export const eventSetActive = (event) => ({

    type: types.eventSetActive,
    payload: event
});


export const eventStartLoading = () => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('events');
            const body = await resp.json();

            const events = prepareEvents(body.events);
            dispatch( eventLoaded(events) )

        } catch (error) {
            console.log(error)
        }
    }
}

export const addUserClass = (event) => {

    return async(dispatch) => {

        try {
            await fetchWithToken(`events/add-user/${event.id}`, event, 'PUT');
        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteUserClass = (event) => {

    return async (dispatch) => {

        try {
            await fetchWithToken(`events/delete-user/${event.id}`, event, 'PUT');
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
			const body = await resp.json();


			const { totales, date, inClass } = body

			const infoClassUser = {
				totales: totales,
				date: date,
				inClass: inClass
			}

			dispatch( classesPending(infoClassUser) )


		} catch (error) {
			console.log(error)
		}
	}
}

export const getClasesDeletePendingUser = () => {

	return async(dispatch) => {

		try {

			const resp = await fetchWithToken('bonos/delete-classes');
			const body = await resp.json();


			const { totales, date, inClass } = body

			const infoClassUser = {
				totales: totales,
				date: date,
				inClass: inClass
			}

			dispatch( classesPending(infoClassUser) )


		} catch (error) {
			console.log(error)
		}
	}
}

export const resetClassesNewBono = () => ({

    type: types.classesReset

})

const classesPending = (classInfo) => ({

	type: types.bonoGetAll,
	payload: classInfo

});

export const eventStartUpdated = ( event ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if( body.ok ) {
                dispatch( eventUpdated(event))
            } else {
                 Swal.fire(
                    'Error', body.msg, 'error'
                )
            }

        } catch ( error ) {

            console.log(error)
        }

    }
}


const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
})


export const eventStartDeleted = () => {

    return async( dispatch, getState ) => {

        const { id } = getState().calendar.activeEvent

        try {

            const resp = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if( body.ok ) {
                dispatch( eventDeleted())
                dispatch( eventStartLoading())
                Swal.fire(
                    'success', body.msg, 'success'
                )
            } else {
                Swal.fire(
                    'Error', body.msg, 'error'
                )
            }

        } catch ( error ) {

            console.log(error)
        }

    }
}

const eventDeleted = () => ({
    type: types.eventDeleted
})

export const resetClassDay = () => ({

	type: types.classResetDay
})


export const comprobarRegistro = () => {


	return async(dispatch, getState ) => {

		const { date } = getState().clases

		const now = moment().format('DD MM YYYY')

		try {

			if (moment(date).format('DD MM YYYY') < now) {

				dispatch( resetClassDay())

			}


		} catch( error ) {

			console.log( error)
		}

	}

}
