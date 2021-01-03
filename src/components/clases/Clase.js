import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment'
import { DateTime } from 'luxon';
import {
    addUserClass,
    deleteUserClass,
    eventStartLoading,
    getClasesPendingUser
} from '../../actions/events';


const localDate = moment().localeData()

export const Clase = (clase) => {

    const dispatch = useDispatch();
    const [ close, setClose ] = useState( false )
    const { uid } = useSelector(state => state.auth);
    const { totales } = useSelector( state => state.clases)
    const usuario =  clase.users.filter( user => user._id === uid );

    const timeCloseClass = () => {
        const now = moment();
        const classeTime = moment(clase.start).add('-45', "minutes");
        return now >= classeTime;
    }

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

    const showButton = () => {

        if(totales === -1 && !usuario.length  ) {
            return(
                <button className="bg-blue-100 py-2 text-blue-300 float-left focus:ring-2 focus:none uppercase cursor-not-allowed">
                    renueva tu bono
                </button>
            )
        }

        if( usuario.length ) {
            return(
                <button className="bg-green-400 py-2 text-white float-left font-bold focus:ring-2 focus:none uppercase cursor-not-allowed">
                    Registrado
                </button>
            )
        }

        if( clase.userclase === clase.users.length) {
            return(
                <button title="Debes de esperar a que algún usuario deje su plaza" className="bg-red-400 py-2 text-white float-left font-bold focus:ring-2 focus:none uppercase cursor-not-allowed">
                    Completa
                </button>
            )
        }



        return(
            <button
                onClick={ handleReserva }
                className="bg-blue-500 py-2 text-blue-100 float-left focus:ring-2 focus:none uppercase"> Regístrate
            </button>

            )


    }

    const showButtonleft = () => {

        if( clase.userclase === clase.users.length && !usuario.length  ) {
            return (
                <button
                    className="bg-red-400 py-2 text-blue-100 float-right uppercase cursor-not-allowed"
                    disabled> Completa
                </button>
            )
        }
        return (
            <button
                onClick={ handleDelete }
                className="bg-red-600 py-2 text-blue-100 float-right uppercase"> No puedo ir
            </button>
        )
    }


    const userRegister = () => {

        return usuario.length >= 0 || clase.userclase === clase.users.length || totales === 0

    }

        return (
            <>
			<div className="clase rounded bg-blue-500 h-80 relative font-body">
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
					<h1 className="title uppercase text-center text-xs -mt-1 mb-1">{ moment(clase.start).format('LL')}</h1>
                    <h1 className="hours uppercase grid text-center text-md mb-1 text-3xl font-bold text-red-600 mx-2 my-1 ">{ moment(clase.start).format('LT') } - { moment(clase.end).format('LT') }</h1>

                 </div>

                {
                    clase.users.length > 0 ?
                    <div className="clase__usuarios-registrados py-3 px-3 grid grid-cols-9 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-1 sm:col-gap-1 gap-y-1">
                        {   clase.users.map(user => (
                                <div className="text-center flex flex-col items-start w-full"  key={user._id}>
                                <img className="object-cover rounded-full h-6 mb-1" title={user.name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                                     <span className="name-class text-xs uppercase text-white">{user.name}</span>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="clase__usuarios-registrados text-blue-100 py-5 px-5 grid">
                        <h1 className="uppercase">¡ se el primero en registrate ! </h1>
                    </div>
                }

                    <div className="clase_buttons grid w-full grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
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
                                    className="bg-red-600 py-2 font-bold text-blue-100 float-left focus:ring-2 focus:none uppercase cursor-not-allowed"> Clase cerrada
                                </button>
                                    :
                                showButton()

                        }


                    </div>
            </div>

                </>

        )


}
