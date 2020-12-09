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

const events = [{
    title: "funcional",
    start: moment().toDate(),
    end: moment().add(1, 'hour').toDate(),
    bgColor: '#000000',
    notes: "Podemos personalizar muchas cosas"

}]

export const CalendarScreen = () => {

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month')

    const dispatch = useDispatch();

    const onDoubleClick = () => {
        dispatch( uiOpenModal())
    }

    const onSelectEvent = (e) => {

        dispatch( eventSetActive(e))
        dispatch( uiOpenModal() )
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
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
        <div className="calendar pt-32 mb-12 px-8">
            <Calendar
                selectable
                localizer={localizer}
                events={ events }
                defaultView={Views.WEEK}
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date(2015, 3, 12)}
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={ {
                    event: CalendarEvent
                } }
                //onSelectEvent={event => alert(event.title)}
                //onSelectSlot={this.handleSelect}
            />
        <AddNewEventButton />
        <CalendarModal />
        </div>
    )
}