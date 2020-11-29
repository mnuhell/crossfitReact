import React from 'react';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { addUserClass, deleteUserClass } from '../../actions/events';


export const Clase = (clase) => {
    
    const dispatch = useDispatch();

    const handleReserva = () => {
        
        dispatch( addUserClass( clase ) )
    }

    const handleDelete = () => {

        dispatch( deleteUserClass( clase ) )
    }

    const getColorsUsers = ( clase ) => {

        let colors = 'bg-green-500';
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
        
        return (
            <div className="clase rounded bg-blue-500 text-white h-80 relative">
                <div className="clase__usuarios block h-8">
                    <div>
                        <h3 className="text-center rounded-full h-20 px-6 text-white-600">
                            <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-5 bg-red-600 text-2xl">
                                {clase.userclase}
                                <small className="block text-sm -mt-1">max. por clase</small>
                            </span>
                        </h3>
                        
                        </div>
                <h3 className="text-center rounded-full px-6 text-white-600">
                        <span title="Usuarios " className={`absolute top-0 right-0 clase__usuarios-count ${ getColorsUsers(clase)} py-1 px-5 text-2xl`}>
                            {clase.users.length > 0 ? clase.users.length : 0}
                            <small className="block text-sm -mt-1">en clase</small>
                        </span>
                </h3>
                </div>
    
                <div className="mx-auto w-full">
                    <span className="text-4xl text-center grid">🏋️‍♀️</span>
                    <h1 className="title uppercase text-center text-2xl font-bold tracking-wide">{clase.type}</h1>
                    <h1 className="title uppercase text-center text-md -mt-2 mb-1">{ DateTime.fromISO(clase.start).setLocale('es').toFormat('t') } - { DateTime.fromISO(clase.end).setLocale('es').toFormat('t') }</h1>
                    <h1 className="title uppercase text-center text-xs mb-2">{DateTime.fromISO(clase.start).setLocale('es').toFormat('EEEE')} <span className="block">🗓</span></h1>
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
                    <div className="clase__usuarios-registrados py-5 px-5 grid">
                        <h1 className="uppercase">¡ registrate ! </h1>
                    </div>
                }
                
                    <div className="clase_buttons grid w-full grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                        
                        <button
                        onClick={ handleDelete }
                        className="bg-red-600 py-2 float-righ uppercase"> Bórrame </button>
                    <button
                        onClick={ handleReserva }
                            className=" bg-green-500 py-2 float-left focus:ring-2 focus:none uppercase"> Apuntame </button>
                    </div>
            </div>
    
        )
    
    
}