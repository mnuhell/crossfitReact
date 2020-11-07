import {types} from '../types/types';
import { AXIOSINSTANCE, LESSONS} from '../../src/api/endpoint/config';
import { loading } from './loading';



export const savedClasesState = ( clase ) => ({

    type: types.savedClases,
    payload: clase

});

export const getClases = () =>{
    // CAMBIAR LAS FECHA
    //const today = moment().format('Y-M-D');
    return async ( dispatch, getState) => {
        AXIOSINSTANCE.get(`${LESSONS}`).then( res => {
            dispatch( savedClasesState(res.data))
            localStorage.setItem('clases', JSON.stringify(res.data))
            dispatch( loading(false))
        }).catch( (error) => {
            console.log(error)
        })
    }
}

export const reserva = ( clase ) => ({

    type: types.reservaClase,
    payload: clase
})


export const reservaClase = ( clase ) => {

    const user = JSON.parse(localStorage.getItem('user'))

    console.log( clase )
    clase.users.push(user.user_id);
    const totalUser = clase.users.length;
    ///** NO PERMITE ACTUALIZAR EL OBJETO PARA SUMAR EL users_count
    return async(dispatch) => {
        localStorage.setItem('claseReservada', JSON.stringify(clase))
        AXIOSINSTANCE.put(`${LESSONS}`, { clase }).then( res => {
            dispatch( reserva(res.data))
        }).catch( error => {
            console.log(error)
        })
        
    }
}