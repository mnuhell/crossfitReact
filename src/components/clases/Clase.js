import React from 'react';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { addUserClass } from '../../actions/events';


export const Clase = (clase) => {
    
    const dispatch = useDispatch();
    const handleReserva = () => {
        
        dispatch( addUserClass( clase ) )
    }

    return (
        <div className="clase rounded bg-blue-500 text-white px-5 h-80 relative">
            <div className="clase__usuarios block h-8">
                <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-3 bg-orange-500 text-2xl">
                    { clase.userclase }
                </span>
            <h3 className="text-center rounded px-6 text-white">{  }</h3>
                <span title="Usuarios " className="absolute top-0 right-0 clase__usuarios-count bg-green-500 py-1 px-3 text-2xl">
                    {clase.users.length > 0 ? clase.users.length : 0  }
                </span>
            </div>

             <div className="">
                <h1 className="title uppercase text-center text-xl">{clase.type}</h1>
                <h1 className="title uppercase text-center text-xs mb-2">{ DateTime.fromISO(clase.start).setLocale('es').toFormat('DDD')  }</h1>
             </div>

            {
                clase.users.length > 0 ?
                <div className="clase__usuarios-registrados mb-10 py-5 grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8  lg:grid-cols-6 xl:grid-cols-12 gap-1 gap-y-1">
                    {   clase.users.map(user => (
                            <div  key={user._id}>
                            <img className="object-cover rounded-full h-6" alt={user.name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                                {/* <span>{user._id}</span> */}
                            </div>
                        ))
                    }
                </div>
                : 
                <div className="clase__usuarios-registrados mb-10 py-5 grid p-1">
                    <h1>Se el primero en registrarte!</h1>
                </div>
            }
            

                <button
                onClick={ handleReserva }
                className="bg-orange-500 block w-full py-2 absolute bottom-0 left-0"> Apuntate </button>
        </div>

    )
}