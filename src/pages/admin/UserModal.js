import React, {useEffect, useState} from 'react'
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {uiCloseModal} from "../../actions/ui";
import {BonoScreen} from "./BonoScreen";

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

export const UserModal = () => {

    const dispatch = useDispatch();

    const {modalOpen} = useSelector( state => state.ui);
    const userActive = useSelector( state => state.user.userActive);
    const [ formValues, setFormValues ] = useState(userActive);
    const bonosSelect = useSelector( state => state.bonos.bonos);

    const { name, username, telefono, email, role, bonos } = formValues || '';

    const closeModal = () => {
        dispatch( uiCloseModal() )
    }

    useEffect(() => {

        if( userActive ) {
            setFormValues(userActive)
        } else {
            setFormValues( {} )
        }

    }, [userActive]);

    const handleInputChange = ({ target }) =>{

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })

    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        console.log('Updated')

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
        <h1 className="text-2xl uppercase text-center bg-blue-500 text-white mb-3 py-3 font-bold"> Usuario </h1>

        <form onSubmit={ handleSubmitForm }>
            <div className="container px-4">

            <div className="form-control grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Nombre</label>
                    <input
                        type="text"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>
                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Usuario</label>
                    <input
                        type="text"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="username"
                        value={ username }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>
            </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Teléfono</label>
                    <input
                        type="text"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="telefono"
                        value={ telefono }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Email</label>
                    <input
                        type="text"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>

            <div className="flex flex-col mb-4">
                <label className="font-bold text-gray-800 mb-1 block">Bonos Activos</label>
                {
                    ( bonos.length > 0 ) ?
                        <div className="flex items-center z-30">{ bonos.map( bono => <BonoScreen key={ bono._id} { ...bono } />) }</div>
                        : <small>no tiene bonos activos</small>
                }


            </div>

            <div className="flex flex-col mb-4">
                <label className="font-bold text-gray-800 mb-1 block">Bonos disponibles</label>

                <select className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none" name="bonos-select" id="bonos-select">
                    {
                        bonosSelect.map( bono => <option key={ bono._id} id={bono._id}> {bono.name} --- { bono.precio}€ </option>)
                    }
                </select>

            </div>
            </div>

            <button className="btn block text-center bg-blue-500 w-full py-3 text-white uppercase mt-10">Guardar</button>

        </form>

        </Modal>
    )
}