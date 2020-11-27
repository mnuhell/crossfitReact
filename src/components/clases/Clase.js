import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    return (
        <div className="clase rounded bg-blue-500 text-white h-80 relative">
            <div className="clase__usuarios block h-8">
            <h3 className="text-center rounded px-6 text-white-600">
                <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-5 bg-red-600 text-2xl">
                    { clase.userclase }
                    </span>
            </h3>
            <h3 className="text-center rounded px-6 text-white-600">
                <span title="Usuarios " className="absolute top-0 right-0 clase__usuarios-count bg-blue-300 py-1 px-5 text-2xl">
                    {clase.users.length > 0 ? clase.users.length : 0  }
                    </span>
            </h3>
            </div>

            <div className="mx-auto w-full">
                <span className="text-3xl text-center grid">🏋️‍♀️</span>
                <h1 className="title uppercase text-center text-xl">{clase.type}</h1>
                <h1 className="title uppercase text-center text-xs mb-2">{ DateTime.fromISO(clase.start).setLocale('es').toFormat('DDD')  }</h1>
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
                <div className="clase__usuarios-registrados py-5 grid p-1">
                    <h1>Se el primero en registrarte!</h1>
                </div>
            }
            
                <div className="clase_buttons grid w-full grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                    <button
                    onClick={ handleReserva }
                        className=" bg-blue-300 py-2 float-left focus:ring-2 focus:none uppercase"> Apuntame </button>
                    <button
                    onClick={ handleDelete }
                        className="bg-red-600 py-2 float-righ uppercase"> Bórrame </button>
                </div>
        </div>

    )
}