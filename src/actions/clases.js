import {types} from '../types/types';
import { AXIOSINSTANCE, LESSONS} from '../../src/api/endpoint/config';
import { loading } from './loading';


export const savedClasesState = ( clase ) => ({

    type: types.savedClases,
    payload: clase

});

export const getClases = () =>{

    return async ( dispatch, getState) => {
        AXIOSINSTANCE.get(`${LESSONS}`).then( res => {
            dispatch( savedClasesState(res.data))
            dispatch( loading(false))
        }).catch( (error) => {
            console.log(error)
        })
    }
    
}