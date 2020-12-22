import {fetchWithToken} from "../helpers/fetch";
import {types} from "../types/types";
import Swal from "sweetalert2";


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

        try {
            const resp = await fetchWithToken('bonos', bono, 'POST');
            const body = await resp.json();

            if( !body.ok) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Bono',
                    text: body.msg,
                })
            }

            Swal.fire({
                icon: 'success',
                title: 'Bono Creado',
                text: body.msg,
            })

            dispatch( getBonos())
        } catch ( error ) {

            console.log(error)
        }



    }
}

export const bonoDeleted = ( bono ) => {

    return async( dispatch ) => {

        try {
            console.log( bono )

            const resp = await fetchWithToken(`bonos/${bono._id}`, bono, 'DELETE');
            const body = await resp.json();

            console.log( body )

            if( !body.ok ) {
                return Swal.fire({
                    icon: 'error',
                    text: body.msg,
                })
            }

            Swal.fire({
                icon: 'success',
                text: body.msg,
            })

            dispatch( getBonos())

        } catch (error) {

            console.log( error)
        }



    }
}