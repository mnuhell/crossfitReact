import {types} from '../types/types';


export const loading = ( active ) => ({

    type: types.loading,
    payload: active

})