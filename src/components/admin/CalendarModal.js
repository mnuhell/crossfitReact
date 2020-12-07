import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        width                 : '100%'
    }
};

Modal.setAppElement('#root')


export const CalendarModal = () => {

    const closeModal = () => {

        console.log('Cerramos modal')
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
                            className="border-2 border-grey-100 rounded h-10 px-3"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />

                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Usuarios:</label>
                    <input
                        type="number"
                        className="border-2 border-grey-100 rounded h-10 px-3"
                        placeholder="Usuarios en clase"
                        name="usuarios"
                        autoComplete="off"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Inicio clase</label>
                    <input className="border-2 border-grey-100 rounded h-10 px-3" type="date" placeholder="Fecha inicio" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1">Fin</label>
                    <input type="date" className="border-2 border-grey-100 rounded h-10 px-3" placeholder="Fecha inicio" />
                </div>

                <hr />

                <button
                    type="submit"
                    className="bg-blue-600 text-white text-center w-full py-3 focus:outline-none uppercase font-bold text-xl sm:text-base bg-blue-600 hover:bg-blue-600 rounded py-2 w-full transition duration-500 ease-in-out">

                    <span>
                         Guardar
                    </span>

                </button>

            </form>
        </Modal>
    )
}