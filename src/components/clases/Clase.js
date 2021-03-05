import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment'
import defaultuser from "../../assets/default-user.jpg";
import {
    addUserClass,
    deleteUserClass,
    eventStartLoading,
	getClasesDeletePendingUser,
    getClasesPendingUser,
} from '../../actions/events';
import {addDateClassDay, getActionsCountClassesPendingMonthAdmin} from '../../actions/user';

export const Clase = (clase) => {

    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const { totales } = useSelector( state => state.clases)
    const { events } = useSelector( state => state.calendar)
	const usuario = clase.users.filter(user => user._id === uid);

    const inClass = events.map( event => event.users.find( user => user._id === uid ));
    const userInClass = inClass.map( user => user?._id)

    const timeCloseClass = () => {
        const now = moment();
        const classeTime = moment(clase.start).add('-45', "minutes");
        return now >= classeTime;
	}

	const icons = ['🙋🏼‍♂️', '🙋🏼‍♀️']

    const handleReserva = () => {

        dispatch(addUserClass(clase));
		dispatch(getClasesPendingUser())
        setTimeout(function () {
            dispatch( eventStartLoading() )
            dispatch( getClasesPendingUser() )
        }, 100)

    }

    const handleDelete = () => {

        dispatch(deleteUserClass(clase))
        dispatch( getClasesDeletePendingUser() );
        setTimeout(function () {
            dispatch( eventStartLoading() )
            dispatch( getClasesDeletePendingUser() );
        }, 100)

    }

    const showButton = () => {

        if(totales === 0 && !usuario.length  ) {
            return(
                <button className="bg-yellow-500 font-bold py-2 text-blue-500 float-left focus:ring-2 focus:none uppercase cursor-not-allowed">
                    renueva tu bono
                </button>
            )
        }

        if( usuario.length ) {
            return(
                <button className="bg-green-500 py-2 text-white float-left font-bold focus:ring-2 focus:none uppercase cursor-not-allowed">
                    Registrado
                </button>
            )
        }

        if( userInClass.includes( uid ) ) {
            return(
                <button className="bg-blue-300 py-2 text-white float-left font-bold focus:ring-2 focus:none uppercase cursor-not-allowed">
                    ya esta registrado
                </button>
            )
        }

        if( clase.userclase === clase.users.length) {
            return(
                <button title="Debes de esperar a que algún usuario deje su plaza" className="bg-red-400 py-2 font-bold text-white float-left font-bold focus:ring-2 focus:none uppercase cursor-not-allowed">
                    Completa
                </button>
            )
        }

        return(
            <button
                onClick={ handleReserva }
                className="bg-blue-900 py-2 text-blue-100 float-left focus:ring-2 focus:none font-bold uppercase"> Regístrate
            </button>

            )


    }

    const showButtonleft = () => {

        if( clase.userclase === clase.users.length && !usuario.length  ) {
            return (
                <button
                    className="bg-red-400 py-2 text-blue-100 font-bold float-right uppercase cursor-not-allowed"
                    disabled> Completa
                </button>
            )
        }

        if(totales === 0 && !usuario.length  ) {
            return(
                <button className="bg-yellow-500 font-bold py-2 text-blue-500 float-left focus:ring-2 focus:none uppercase cursor-not-allowed">
                    renueva tu bono
                </button>
            )
        }

        if( userInClass.includes( uid ) && !usuario.length ) {
            return (
                <button
                    className="bg-blue-300 py-2 text-blue-100 float-right uppercase cursor-not-allowed font-bold"> Ya esta registrado
                </button>
            )
        }

        return (
            <button
                onClick={ handleDelete }
                className="bg-red-600 py-2 text-blue-100 font-bold float-right uppercase"> Dejar hueco
            </button>
        )
    }

        return (
            <>
			<div className="clase rounded bg-blue-700 h-80 relative">
                <div className="clase__usuarios block h-8 shadow-2xl">
                        <h3 className="text-center px-6 text-red-500 font-bold" title="Máximos usuarios por clase">
                            <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos px-5 border-b-2 bg-blue-900 text-4xl">{clase.userclase}<span className="">🏃‍♂️</span>
                                <span className="text-sm block -mt-4">max</span>
                            </span>
                        </h3>
                        <h3 className="text-center rounded-full px-6 text-green-500 font-bold" title="Usuarios para esta clase">
                            <span title="Usuarios " className={`absolute top-0 right-0 clase__usuarios-count border-b-2 bg-blue-900 px-5 text-4xl`}>
                                {clase.users.length > 0 ? clase.users.length : 0}🏃🏻‍♀️
                                <span className="text-sm block -mt-4">cls</span>
                            </span>
                        </h3>
                </div>

                <div className="mx-auto w-full text-blue-100 pt-10">
                    <span className="text-6xl text-center grid">🏋️‍♀️</span>
					<h1 className="title uppercase text-center text-3xl font-bold tracking-wide">{clase.type}</h1>
                    <h1 className="title uppercase text-center text-2xl mb-3 font-bold">{ moment(clase.start).format('LL')}</h1>
                    <h1 className="shadow-2xl bg-blue-700 py-2 hours uppercase border-4 border-dotted flex items-stretch items-center justify-center text-3xl font-bold text-white -mt-3">
                        { moment(clase.start).format('LT') } 🤟 { moment(clase.end).format('LT') }
                    </h1>

                 </div>

                {
                    clase.users.length > 0 ?
                    <div className="clase__usuarios-registrados bg-blue-700 shadow-2xl py-3 px-3 grid grid-cols-9 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                        {   clase.users.map((user) =>  (
                                <div title={user.name} className="text-center flex flex-col justify-center gap-y-2 items-center w-full text-md"  key={user._id}>
                                    <span className="object-cover rounded-full h-10 cursor-pointer text-4xl"> { icons[Math.floor(Math.random()*icons.length)]} </span>
                                </div>
                            ))
                        }

                    </div>
                    :
                    <div className="flex items-center  clase__usuarios-registrados text-blue-100 py-3 px-3">
                        <span className="flex items-center uppercase h-10 font-bold">Consigue la pole!! 🤪</span>
                    </div>
                }

                    <div className="clase_buttons grid w-full grid-cols-2 sm:grid-cols-2 gap-6 md:grid-cols-2">
                        {
                            timeCloseClass()
                                    ?
                                <button
                                    className="bg-red-600 py-2 font-bold text-blue-100 float-right uppercase cursor-not-allowed"> Clase cerrada
                                </button>
                                    :
                                showButtonleft()

                        }

                        {
                            timeCloseClass() ?
                                <button
                                    className="bg-red-600 py-2 font text-blue-100 float-left focus:ring-2 focus:none font-bold uppercase cursor-not-allowed"> Clase cerrada
                                </button>
                                    :
                                showButton()

                        }


                    </div>
            </div>

                </>

        )


}
