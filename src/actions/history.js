import {fetchWithToken} from "../helpers/fetch";
import {addBonoToUser} from "./user";


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

         dispatch( addBonoToUser( data ))
        }

        } catch ( error ) {

            console.log( error )
        }

    }

}

export const deleteHistoryBono = ( data ) => {

    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken( `history/bono/${data.bonoId}`, data , 'DELETE');
            const body = await resp.json();

        } catch (e) {
            console.log(e)
        }


    }

}

export const resetHistoryBono = () => {

    return async( dispatch ) => {

        try {





        } catch (e) {
            console.log( e )
        }
    }

}
