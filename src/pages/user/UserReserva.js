import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Error } from '../../components/alerts/Alerts';
import { LoadingApp } from '../../components/LoadingApp';
import { Clase } from '../../components/clases/Clase';
import { NextClase } from '../../components/clases/NextClase';
import { comprobarRegistro, eventStartLoading } from '../../actions/events';
import { loading } from '../../actions/loading';
import moment from 'moment'

const UserReserva = () => {

    const dispatch = useDispatch();
    const events = useSelector(state => state.calendar.events);
	const active = useSelector(state => state.loading.active);


    const currentDays = events.filter( event => event.start < moment().endOf('day'))
	const nextDays = events.filter( event => event.start > moment().endOf('day'))

    useEffect(() => {

		dispatch( eventStartLoading() );
		dispatch( comprobarRegistro() )

    }, [dispatch]);

    setTimeout(() => {
        dispatch(loading(false))
	}, 500)

    return (

        active ? <LoadingApp /> :

            <>
                { (currentDays.length !== 0 || nextDays !== 0)
                    ? <>
                        <div className="reservas pt-32 text-white px-3 container mx-auto font-body">
                            <h2 className="uppercase text-3xl font-extrabold pb-6">
                                Próximas Clases
                                {/*<p className="-mt-2 text-sm">{ moment().format('LL') }</p>*/}
                            </h2>
                            <div
                                className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-y-6 setting pb-24">
                                {nextDays.map(nextDay => (<NextClase key={nextDay.id} {...nextDay} />))}
                            </div>
                        </div>
                        <div className="reservas text-white px-3 container mx-auto font-body">
                            <h2 className="uppercase text-3xl font-extrabold pb-6">
                                Clases disponibles
                                {/*<p className="-mt-2 text-sm">{ moment().format('LL') }</p>*/}
                            </h2>
                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-y-6 setting pb-24">
                                {currentDays.map(currentDay => (<Clase key={currentDay.id} {...currentDay} />))}
                            </div>
                        </div>

                    </>
                    : <Error header="Lo sentimos! " body=" No hay clases previstas para esta semana" />
                }
        </>
    )
}

export default UserReserva
