import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import {CalendarEvent} from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import moment from 'moment';
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useDispatch} from "react-redux";
import {uiOpenModal} from "../../actions/ui";
import {eventSetActive, eventStartLoading} from "../../actions/events";
import {AddNewEventButton} from "../ui/AddNewEvent";
import {DeleteEventButton} from "../ui/DeleteEventButton";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../LoadingApp";


moment.locale('es');
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);
    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month')
    const active = useSelector( state => state.loading.active)

    const dispatch = useDispatch();

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal())
    }

    const onSelectEvent = (e) => {

        dispatch( eventSetActive(e))
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#FCA311',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    setTimeout(function () {
        dispatch(loading(false))
    }, 1000)


    useEffect( () => {
        dispatch( eventStartLoading() )
    },[ dispatch])

    return (

        ( active ) ? <LoadingApp /> :

        <div className="calendar py-32 mb-12 px-8">
            <div className="h-auto w-full mb-24 block">
                { activeEvent ? <DeleteEventButton /> : ''}
                <AddNewEventButton />
            </div>

            <Calendar
                selectable
                localizer={localizer}
                events={ events }
                showMultiDayTimes
                messages={messages}
                defaultView={Views.AGENDA}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={ {
                    event: CalendarEvent
                } }
            />
        <CalendarModal />
        </div>
    )
}