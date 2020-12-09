import React, {useState} from 'react';
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
import {eventSetActive} from "../../actions/events";
import {AddNewEventButton} from "../ui/AddNewEvent";


moment.locale('es');
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

    const { events } = useSelector(state => state.calendar);
    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month')

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
            backgroundColor: '#14213D',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    return (
        <div className="calendar py-32 mb-12 px-8">
            <Calendar
                selectable
                localizer={localizer}
                events={ events }
                showMultiDayTimes
                defaultView={Views.WEEK}
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={ {
                    event: CalendarEvent
                } }

            />
        <AddNewEventButton />
        <CalendarModal />
        </div>
    )
}