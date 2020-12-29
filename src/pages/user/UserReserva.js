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
						<h2 className="text-center text-blue-900 pt-32 uppercase text-2xl font-extrabold border-blue-800 ">
							Clases disponibles
							<p className="-mt-3 ">{ moment().format('LL') }</p>
							</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-6 setting pt-5 pb-16 px-6">
                            {filterDate().map(event => (<Clase key={event.id} {...event} />))}
                        </div>
                    </>
                    : <Error header="Lo sentimos! " body=" No hay clases previstas para esta semana" />
                }
        </>
    )
}

export default UserReserva
