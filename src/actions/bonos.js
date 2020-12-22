import {fetchWithToken} from "../helpers/fetch";
import {types} from "../types/types";


export const getBonos = () => {

    return async ( dispatch ) => {

        try {

            const resp = await fetchWithToken('bonos');
            const body = await resp.json();

            if( body.ok ) {

                dispatch(getBonosState(body.bonos))
            }

        } catch (error) {

            console.log(error);
        }

    }
}

export const getBonosState = ( bonos ) => ({

    type: types.bonoGetAllState,
    payload: bonos


});

export const bonoSaved = ( bono ) => {

    return async( dispatch ) => {

        const resp = await fetchWithToken('bonos', bono, 'POST');
        const body = await resp.json();

        dispatch( getBonos())

    }

}