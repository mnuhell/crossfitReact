import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {uiCloseModal} from "../../actions/ui";
import {bonoEdited, bonoReset, bonoSaved, getBonos} from "../../actions/bonos";

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

const initialState = {
    name: 'Bono 5 días',
    days: 5,
    precio: 25
}

export const BonoModal = () => {

    const dispatch = useDispatch();

    const  { modalOpen } = useSelector( state => state.ui);
    const bonoActive = useSelector(state => state.bonos.bonoActive);
    const [ formValues, setFormValues ] = useState( initialState );
    const { _id, name, days, precio } = formValues;

    useEffect(() => {
        if( bonoActive ) {
            setFormValues(bonoActive)
        } else {
            setFormValues(initialState)
        }
    }, [bonoActive]);

    const closeModal = () => {
        dispatch( uiCloseModal() )
        dispatch( bonoReset())
    }

    const handleInputChange = ({ target }) => {

        setFormValues( {
            ...formValues,
            [ target.name ]: target.value
        })

    }

    const handleSubmitForm = ( e ) => {
        e.preventDefault()
        if( _id ) {
            dispatch( bonoEdited(formValues))
            dispatch( uiCloseModal())
        } else {
            dispatch( bonoSaved(formValues))

        }



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
        <h1 className="text-2xl uppercase text-center bg-blue-500 text-white mb-3 py-3 font-bold"> Bono </h1>

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
                    <label className="font-bold text-gray-800 mb-1 block">Días</label>
                    <input
                        type="number"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="days"
                        value={ days }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>
            </div>

                <div className="flex flex-col mb-4">
                    <label className="font-bold text-gray-800 mb-1 block">Precio</label>
                    <input
                        type="number"
                        className="border-2 border-grey-100 rounded h-10 px-3 focus:ring-1 focus:border-blue-300 focus:border-transparent focus:outline-none"
                        name="precio"
                        value={ precio }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />

                </div>
            </div>
            {
                (_id) ? <button className="btn block text-center bg-blue-500 w-full py-3 text-white uppercase mt-10">Editar</button>
                    :   <button className="btn block text-center bg-blue-500 w-full py-3 text-white uppercase mt-10">Guardar</button>
            }


        </form>

        </Modal>
    )
}