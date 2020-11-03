import React from 'react';
import { useSelector } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';

import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';


const UserReserva = () => {

    
    const loadingState = useSelector(state => state.loading)
    const clases = JSON.parse(localStorage.getItem('clases'));
    
    return (

        loadingState.active ? <LoadingApp /> : 
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-6 setting pt-20 pb-16 px-6">
        {
            clases 
            ? clases.map( clase => ( <Clase key={clase.id} {...clase} />))
            : <Error header="Lo sentimos! " body=" No hay clases previstas para el dia de hoy" />
        }
    </div>
        
    )
}

export default UserReserva