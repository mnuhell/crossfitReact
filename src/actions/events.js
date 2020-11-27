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
                    title: 'Airfit',
                    text: `${body.msg}`,
                    icon: 'delete',
                    confirmButtonText: 'Salir'
                })
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

