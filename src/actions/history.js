import {fetchWithToken} from "../helpers/fetch";
import {addBonoToUser, getCountClassesPendingMonthAdmin} from "./user";


export const savedHistoryBono = ( data ) => {

    return async ( dispatch ) => {

        try {

        const resp = await fetchWithToken('history/bono', data, 'POST');
        const body = await resp.json();

        if( body.ok ) {
            const data = {
                bonoIdHistory: body.bonoSavedHistory._id,
                userId: body.bonoSavedHistory.user
            }

			dispatch(addBonoToUser(data))
        }

        } catch ( error ) {

            console.log( error )
        }

    }

}

export const deleteHistoryBono = ( data ) => {

    return async( dispatch ) => {

        try {

            await fetchWithToken( `history/bono/${data.bonoId}`, data , 'DELETE');

        } catch (e) {
            console.log(e)
        }


    }

}
