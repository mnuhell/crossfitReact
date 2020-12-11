import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import {prepareEvents} from "../helpers/prepareEvents";
import moment from 'moment';


export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const savedNewEvent = ( event ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken( 'events', event, 'POST');
            const body = await resp.json();

            dispatch( eventAddNew( body.events ));

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
            const resp = await fetchWithToken(`events/add-user/${event.id}`, event, 'PUT');
            const body = await resp.json();

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






