import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';

import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';
import { eventStartLoading } from '../../actions/events';


const UserReserva = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth);
    
    useEffect(() => {
        
        dispatch( eventStartLoading() )
        
    }, [dispatch])

    const events = [{
        id: '78345627',
        name: 'aspdfjhs[epif]'
    },
        {
            id: '4738563',
        name: 'dofhpjroifehtpreo[epif]'
    }]
    
    return (

        checking ? <LoadingApp /> :
        <>
        {
            events
                    ? <>
                    <h2 className="text-center text-blue-900 pt-24 uppercase text-2xl">Clases disponibles</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-6 setting pt-5 pb-16 px-6">
                        {events.map(clase => (<Clase key={clase.id} {...clase} />))}
                    </div>
                        </>
            : <Error header="Lo sentimos! " body=" No hay clases previstas para el dia de hoy" />
        }
        </>

    )
}

export default UserReserva