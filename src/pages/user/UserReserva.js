import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';
import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';
import { comprobarRegistro, eventStartLoading } from '../../actions/events';
import { loading } from '../../actions/loading';

const UserReserva = () => {

    const dispatch = useDispatch();
    const events = useSelector(state => state.calendar.events);
	const active = useSelector(state => state.loading.active);

    useEffect(() => {

		dispatch( eventStartLoading() );
		//dispatch( comprobarRegistro() )

    }, []);

    setTimeout(() => {
        dispatch(loading(false))
	}, 500)

    return (

        active ? <LoadingApp /> :

            <>
                { (events.length !== 0)
                    ? <>
                        <div className="reservas pt-32 text-white px-3 container mx-auto font-body">
                            <h2 className="uppercase text-3xl font-extrabold pb-6">
                                Clases disponibles
                            </h2>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-y-6 setting pb-24">
                                {events.map(event => (<Clase key={event.id} {...event} />))}
                            </div>
                        </div>
                    </>
                    : <Error header="Lo sentimos! " body=" No hay clases previstas para esta semana" />
                }
        </>
    )
}

export default UserReserva
