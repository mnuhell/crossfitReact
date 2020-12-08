import React, {useState} from 'react';
import Modal from 'react-modal';
import DateTimePicker from "react-datetime-picker";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {uiCloseModal, uiOpenModal} from "../../actions/ui";

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
    const [ end, setEnd ] = useState( nowPlusHour.toDate() );

    const {modalOpen} = useSelector( state => state.ui);

    const [ formValues, setFormValues ] = useState({
        title: 'Funcional',
        users: 15,
        start: now.toDate(),
        end: nowPlusHour.toDate()
    });

    const { title, users} = formValues;


    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name ]: target.value
        })

    }

    const closeModal = () => {

        dispatch( uiCloseModal() )
    }

    const handleStartDateChange = (e) => {
        setStartDate( e )
    }

    const handleFinishDateChange = (e) => {
        setEnd( e )
    }

    const handleFormData = (e) => {
        e.preventDefault()
        console.log(formValues)

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
            <h1 className="text-2xl uppercase text-center bg-blue-500 text-white mb-3 py-5 font-bold"> Nueva Clase </h1>

            <form className="px-5 py-5" onSubmit={ handleFormData }>
                <div className="flex flex-col mb-4">
                        <label className="font-bold text-gray-800 mb-1 block">Tipo de Clase:</label>
                        <input
                            type="text"
                            className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                            placeholder="Título del evento"
                            name="title"
                            value={ title }
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
                        name="users"
                        value={ users }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Inicio clase</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={ startDate }
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Fin</label>
                    <DateTimePicker
                        onChange={handleFinishDateChange}
                        value={ end }
                        minDate={ startDate }
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 bg-blue-600 text-white text-center w-full py-3 focus:outline-none uppercase font-bold text-xl sm:text-base bg-blue-600 hover:bg-blue-600 rounded py-2 w-full transition duration-500 ease-in-out">

                    <span>
                         Guardar
                    </span>

                </button>

            </form>
        </Modal>
    )
}