import {types} from '../types/types';
import { AXIOSINSTANCE, LESSONS} from '../../src/api/endpoint/config';
import { loading } from './loading';
import moment from 'moment';



export const savedClasesState = ( clase ) => ({

    type: types.savedClases,
    payload: clase

});

export const getClases = () =>{
    console.log(moment().format())
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