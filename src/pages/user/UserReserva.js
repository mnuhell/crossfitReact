import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';

import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';


const UserReserva = () => {

    
    const loadingState = useSelector(state => state.loading)
    const clases = useSelector(state => state.clases[0])
    
    return (

        loadingState.active ? <LoadingApp /> : 
        <div className="flex justify-center content-center setting container mx-auto">
        {
            clases 
            ? clases.map( clase => ( <Clase key={clase.id} {...clase} />))
            : <Error header="Lo sentimos! " body=" No hay clases previstas para el dia de hoy" />
        }
    </div>
        
    )
}

export default UserReserva