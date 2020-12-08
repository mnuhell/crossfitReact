import React, {useState} from 'react';
import Modal from 'react-modal';
import DateTimePicker from "react-datetime-picker";
import moment from 'moment';

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

    const [ startDate, setStartDate ] = useState( now.toDate() )
    const [ finish, setFinish ] = useState( nowPlusHour.toDate() )

    const closeModal = () => {

        console.log('Cerramos modal')
    }

    const handleStartDateChange = (e) => {
        setStartDate( e )
    }

    const handleFinishDateChange = (e) => {
        setFinish( e )
    }

    return (

        <Modal
            isOpen={ true }
            /*onAfterOpen={afterOpenModal} */
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeMS={ 500 }
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1 className="text-2xl uppercase text-center bg-blue-500 text-white mb-3 py-5 font-bold"> Nueva Clase </h1>

            <form className="px-5 py-5">
                <div className="flex flex-col mb-4">
                        <label className="font-bold text-gray-800 mb-1 block">Tipo de Clase:</label>
                        <input
                            type="text"
                            className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />

                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Usuarios:</label>
                    <input
                        type="number"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        placeholder="Usuarios en clase"
                        name="usuarios"
                        autoComplete="off"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Inicio clase</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={ startDate }
                        minDate={ startDate }
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Fin</label>
                    <DateTimePicker
                        onChange={handleFinishDateChange}
                        value={ finish }
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