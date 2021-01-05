import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { Error } from '../../components/alerts/Alerts';
import moment from 'moment';
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
	}, 500)

	const filterDate = () => {

		let currentDay = moment().add('-8', 'hours');
        return events.filter(event => moment(event.start).isSameOrAfter( currentDay, 'day'));
	}
	
    return (

        active ? <LoadingApp /> :

            <>
                { (filterDate().length !== 0)
                    ? <>
                        <div className="reservas pt-40 text-white container mx-auto lg:px-4">
                            <h2 className="uppercase text-2xl font-extrabold pb-6">
                                Clases disponibles
                                <p className="-mt-2 text-sm">{ moment().format('LL') }</p>
                            </h2>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-y-6 setting pb-24">
                                {filterDate().map(event => (<Clase key={event.id} {...event} />))}
                            </div>
                        </div>
                    </>
                    : <Error header="Lo sentimos! " body=" No hay clases previstas para esta semana" />
                }
        </>
    )
}

export default UserReserva
