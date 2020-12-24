import {fetchWithToken} from "../helpers/fetch";


export const historyGetBonos = ( data ) => {

    return async ( dispatch ) => {

        try {

        console.log( data)
        const resp = await fetchWithToken('history/bono', data, 'POST');
        const body = await resp.json();

        console.log( body )


        } catch ( error ) {

            console.log( error )
        }

    }


}