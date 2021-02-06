import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment'
import {
    addUserClass,
    deleteUserClass,
    eventStartLoading,
    getClasesPendingUser
} from '../../actions/events';

export const Clase = (clase) => {

    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const {totales} = useSelector( state => state.clases)
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

        let colors = 'bg-blue-400';
        const totalUsers = clase.userclase;
        const userRegistrados = clase.users;

        if ( userRegistrados <= ((totalUsers * 20) / 100)) {
            colors = 'bg-green-500';
        } else if(userRegistrados <= ((totalUsers * 50) / 100)) {
            colors = 'bg-orange-500';
        } else if(userRegistrados === ((totalUsers * 100) / 100)) {
            colors = 'bg-red-600';
        }

        return colors;

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

        if( !usuario.length ) {
            return (
                <button
                    className="bg-blue-900 py-2 text-blue-100 float-right uppercase cursor-not-allowed font-bold"> Dejar hueco
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
			<div className="clase rounded bg-blue-700 h-80 relative font-body">
                <div className="clase__usuarios block h-8">
                        <h3 className="text-center px-6 text-blue-10" title="Máximos usuarios por clase">
                            <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-5 bg-blue-400 text-md ">
                                {clase.userclase}
                                <small className="block text-sm -mt-1">max. clase</small>
                            </span>
                        </h3>
                        <h3 className="text-center rounded-full px-6 text-blue-100" title="Usuarios para esta clase">
                            <span title="Usuarios " className={`absolute top-0 right-0 clase__usuarios-count ${ getColorsUsers(clase)} py-1 px-5 text-md`}>
                                {clase.users.length > 0 ? clase.users.length : 0}
                                <small className="block text-sm -mt-1">en clase</small>
                            </span>
                        </h3>
                </div>

                <div className="mx-auto w-full text-blue-100 pt-10">
                    <span className="text-4xl text-center grid">🏋️‍♀️</span>
					<h1 className="title uppercase text-center text-3xl font-bold tracking-wide">{clase.type}</h1>
                    <h1 className="title uppercase text-center text-lg -mt-3 mb-3 font-bold">{ moment(clase.start).format('LL')}</h1>
                    <h1 className="shadow-2xl bg-blue-600 py-1 px-3 hours uppercase grid text-center text-md mb-1 text-3xl font-bold text-white -mt-2">{ moment(clase.start).format('LT') } - { moment(clase.end).format('LT') }</h1>

                 </div>

                {
                    clase.users.length > 0 ?
                    <div className="clase__usuarios-registrados bg-blue-700 shadow-2xl py-3 px-3 grid grid-cols-8 gap-y-2 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10">
                        {   clase.users.map((user) =>  (
                                <div title={user.name} className="text-center flex flex-col items-center w-full text-md"  key={user._id}>

                                    <img className="object-cover rounded-full h-10 " title={user.name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
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
