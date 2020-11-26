import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';


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

        console.log('Usuario registrado')
    }
}


const eventLoaded = ( events ) => ({

    type: types.eventStartLoading,
    payload: events

})

