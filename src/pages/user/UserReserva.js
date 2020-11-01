import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';
import { AXIOSINSTANCE, LESSONS} from '../../../src/api/endpoint/config';
import { LoadingApp } from '../../components/LoadingApp';
import { loading } from '../../actions/loading';
import { Clase } from '../../components/clases/Clase';
import { savedClasesState } from '../../actions/clases';


const UserReserva = () => {

    
    const loadingState = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect( () => {
        
            AXIOSINSTANCE.get(`${LESSONS}`).then( res => {
                dispatch( savedClasesState(res.data))
                dispatch( loading(false))
            }).catch( (error) => {
                console.log(error)
            })
        
    }, [dispatch]);

    const clases = useSelector(state => state.clases)
    return (

        loadingState.active ? <LoadingApp /> : 
        <div className="flex justify-center content-center setting">
        {
            clases 
            ? clases.map( clase => ( <Clase key={clase.id} {...clase} />))
            : <Error header="Lo sentimos! " body=" No hay clases previstas para el dia de hoy" />
        }
    </div>
        
    )
}

export default UserReserva