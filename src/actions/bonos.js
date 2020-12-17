import {fetchWithToken} from "../helpers/fetch";
import {types} from "../types/types";


export const getBonos = () => {

    return async ( dispatch ) => {

        try {

            const resp = await fetchWithToken('bonos');
            const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('bonos', JSON.stringify(body.bonos));
            }
            const bonos = JSON.parse(localStorage.getItem('bonos'));

            dispatch( getBonosState(bonos))


        } catch (error) {

            console.log(error);
        }

    }
}


const getBonosState = ( bonos ) => ({

    type: types.bonoGetAll,
    payload: bonos


})