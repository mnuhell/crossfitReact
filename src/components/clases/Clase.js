import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DateTime } from 'luxon';
import {
    addUserClass,
    deleteUserClass,
    eventStartLoading,
    getClasesPendingUser
} from '../../actions/events';


export const Clase = (clase) => {

    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const [ disableButton, setDisableButton] = useState( false)

    const actual = DateTime.local().setLocale('es');
    const final =  DateTime.fromISO(clase.end).setLocale('es')

    const { minutes } = final.diff(actual, 'minute')

    const handleReserva = () => {

        dispatch(addUserClass(clase));
        dispatch( getClasesPendingUser() )
        setTimeout(function () {
            dispatch( eventStartLoading() )
            dispatch( getClasesPendingUser() )
        }, 200)

    }

    const handleDelete = () => {

        dispatch(deleteUserClass(clase))
        dispatch( getClasesPendingUser() );
        setTimeout(function () {
            dispatch( eventStartLoading() )
            dispatch( getClasesPendingUser() )
        }, 200)

    }

    const getColorsUsers = ( clase ) => {

        let colors = 'bg-blue-500';
        const totalUsers = clase.userclase;
        const userRegistrados = clase.users;

        if ( userRegistrados <= ((totalUsers * 20) / 100)) {
            colors = 'bg-blue-500';
        } else if(userRegistrados <= ((totalUsers * 50) / 100)) {
            colors = 'bg-orange-500';
        } else if(userRegistrados === ((totalUsers * 100) / 100)) {
            colors = 'bg-red-600';
        }

        return colors;

    }

    const userRegister = () => {

        const usuario =  clase.users.filter( user => user._id === uid);
        return usuario.length > 0 || clase.userclase === clase.users.length

    }

        return (
			<div className="clase rounded bg-blue-500 h-80 relative">
                <div className="clase__usuarios block h-8">
                    <div>
                        <h3 className="text-center rounded-full h-20 px-6 text-blue-100">
                            <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-5 bg-red-600 text-2xl">
                                {clase.userclase}
                                <small className="block text-sm -mt-1">max. por clase</small>
                            </span>
                        </h3>

                        </div>
                <h3 className="text-center rounded-full px-6 text-blue-100">
                        <span title="Usuarios " className={`absolute top-0 right-0 clase__usuarios-count ${ getColorsUsers(clase)} py-1 px-5 text-2xl`}>
                            {clase.users.length > 0 ? clase.users.length : 0}
                            <small className="block text-sm -mt-1">en clase</small>
                        </span>
                </h3>
                </div>

                <div className="mx-auto w-full text-blue-100">
                    <span className="text-4xl text-center grid">🏋️‍♀️</span>
					<h1 className="title uppercase text-center text-2xl font-bold tracking-wide">{clase.type}</h1>
					<h1 className="title uppercase text-center text-xs -mt-1 mb-1">{DateTime.fromISO(clase.start).setLocale('es').toFormat('DDD')}</h1>
                    <h1 className="title uppercase text-center text-md -mt-2 mb-1">{ DateTime.fromISO(clase.start).setLocale('es').toFormat('t') } - { DateTime.fromISO(clase.end).setLocale('es').toFormat('t') }</h1>

                 </div>

                {
                    clase.users.length > 0 ?
                    <div className="clase__usuarios-registrados py-5 px-5 grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8  lg:grid-cols-6 xl:grid-cols-12 gap-1 gap-y-1">
                        {   clase.users.map(user => (
                                <div  key={user._id}>
                                <img className="object-cover rounded-full h-6" alt={user.name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                                    {/* <span>{user._id}</span> */}
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="clase__usuarios-registrados text-blue-100 py-5 px-5 grid">
                        <h1 className="uppercase">¡ registrate ! </h1>
                    </div>
                }

                    <div className="clase_buttons grid w-full grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                        {
                            minutes <= 30
                                    ?
                                <button
                                    className="bg-red-600 py-2 text-blue-100 float-right uppercase cursor-not-allowed"> Clase caducada
                                </button>
                                    :
                                <button
                                    onClick={ handleDelete }
                                    className="bg-red-600 py-2 text-blue-100 float-right uppercase"> No puedo ir
                                </button>

                        }

                        {
                            userRegister()
                                ?
                                <button
                                    className="bg-blue-100 py-2 text-blue-300 float-left focus:ring-2 focus:none uppercase cursor-not-allowed"> Registrado
                                </button>
                                :
                                <button
                                    onClick={ handleReserva }
                                    className="bg-blue-500 py-2 text-blue-100 float-left focus:ring-2 focus:none uppercase"> Regístrate
                                </button>
                        }


                    </div>
            </div>

        )


}
