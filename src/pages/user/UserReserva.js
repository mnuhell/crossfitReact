import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { Error } from '../../components/alerts/Alerts';

import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';
import { eventStartLoading } from '../../actions/events';
import { loading } from '../../actions/loading';


const UserReserva = () => {

    const dispatch = useDispatch();
    const events = useSelector(state => state.calendar.events);
    const active = useSelector(state => state.loading.active);

    useEffect(() => {
        
        dispatch(eventStartLoading());
        
    }, [dispatch]);

    setTimeout(() => {
        dispatch(loading(false))
        dispatch( eventStartLoading() )
    }, 500)

        let endDate = DateTime.fromISO();

        const eventsFilterDate = events.filter(event => DateTime.fromISO(event.start).setLocale('es').ts >= endDate.ts);

        console.log(eventsFilterDate)
    
    return (
    
        active ? <LoadingApp /> :
            <>
    
                { (eventsFilterDate.length != 0)
                    ? <>
                        <h2 className="text-center text-blue-900 pt-24 uppercase text-2xl">Clases disponibles</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-6 setting pt-5 pb-16 px-6">
                            {eventsFilterDate.map(event => (<Clase key={event.id} {...event} />))}
                        </div>
                    </>
                    : <Error header="Lo sentimos! " body=" No hay clases previstas para esta semana" />
                }
        
            </>
    )
}

export default UserReserva