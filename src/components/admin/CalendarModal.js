import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import DateTimePicker from "react-datetime-picker";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {uiCloseModal} from "../../actions/ui";
import {eventSetActive, eventStartLoading, eventStartUpdated, savedNewEvent} from "../../actions/events";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        width                 : '100%'
    }
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');

const nowPlusHour = now.clone().add(1, 'hours')


export const CalendarModal = () => {

    const dispatch = useDispatch();
    const [ startDate, setStartDate ] = useState( now.toDate() );
    const [ endDate, setEndDate ] = useState( nowPlusHour.toDate() );
    const [ error, setError ] = useState( false );
    const [ messageError, setMessageError ] = useState('');

    const {modalOpen} = useSelector( state => state.ui);
    const {activeEvent} = useSelector( state => state.calendar);

    const [ formValues, setFormValues ] = useState({
        type: '',
        userclase: 0,
        users: [],
        start: '',
        end: ''
    });

    const { type, userclase, start, end } = formValues;

    useEffect(() => {

        if( activeEvent) {
            setFormValues(activeEvent)
        }

    }, [activeEvent]);


    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name ]: target.value
        })

    }

    const closeModal = () => {

        dispatch( eventSetActive(null))
        dispatch( uiCloseModal() )

    }

    const handleStartDateChange = (e) => {
        setStartDate( e )
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleFinishDateChange = (e) => {
        setEndDate( e )
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleFormData = (e) => {
        e.preventDefault()

        const momentStart = moment(startDate);
        const momentEnd = moment(endDate);

        if(momentStart.isSameOrAfter(momentEnd)){
            setMessageError('La fecha de fin no puede ser menor a la de inicio')
            setError(true)

            return false;
        }

        if(type.trim() === '') {

            setMessageError('Los campos no pueden estar vacios')
            setError(true)

            return false;
        }


        if(activeEvent) {
            dispatch( eventStartUpdated(formValues))

        } else {
            dispatch( savedNewEvent(formValues));

        }


        setError(false);
        dispatch( eventStartLoading())

        closeModal()
    }

    return (

        <Modal
            isOpen={ modalOpen }
            /*onAfterOpen={afterOpenModal} */
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeMS={ 500 }
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1 className="text-2xl uppercase text-center bg-blue-500 text-white mb-3 py-3 font-bold"> Nueva Clase </h1>

            <form onSubmit={ handleFormData }>
                <div className="px-5 py-5">

                    {(error) ? <p className="bg-red-500 text-white py-2 mb-5 text-center rounded-sm">{messageError}</p> : ''}

                    <div className="flex flex-col mb-4">
                            <label className="font-bold text-gray-800 mb-1 block">Tipo de Clase:</label>
                            <input
                                type="text"
                                className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                                placeholder="Título del evento"
                                name="type"
                                value={ type }
                                onChange={ handleInputChange }
                                autoComplete="off"
                            />

                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="font-bold text-gray-800 mb-1 block">Usuarios:</label>
                        <input
                            type="number"
                            className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                            placeholder="Usuarios en clase"
                            name="userclase"
                            value={ userclase }
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="font-bold text-gray-800 mb-1">Inicio clase</label>
                        <DateTimePicker
                            onChange={handleStartDateChange}
                            name="startDate"
                            value={ startDate }
                            className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="font-bold text-gray-800 mb-1">Fin</label>
                        <DateTimePicker
                            onChange={handleFinishDateChange}
                            name="endDate"
                            value={ endDate }
                            minDate={ startDate }
                            className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="mt-6 bg-green-500 text-white text-center w-full py-3 focus:outline-none uppercase font-bold text-xl sm:text-base hover:bg-green-600 rounded py-2 w-full transition duration-500 ease-in-out">

                    <span>
                         Guardar
                    </span>

                </button>

            </form>
        </Modal>
    )
}