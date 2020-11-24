import React from 'react';


export const Clase = (clase) => {
    

    const handleReserva = () => {
        
        console.log('reserva de clase')
    }


    return (
        <div className="clase rounded bg-blue-500 text-white px-5 h-80 relative">
            <div className="clase__usuarios block h-8">
                <span title="Numero máximo de alumnos por clase" className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-3 bg-orange-500 text-2xl">
                    { clase.maximo_alumnos}
                </span>
            <h3 className="text-center rounded px-6 text-white">{  }</h3>
                <span title="Usuarios " className="absolute top-0 right-0 clase__usuarios-count bg-green-500 py-1 px-3 text-2xl">
                    {clase.users_count}
                </span>
            </div>

             <div className="">
                <h1 title="nombre de la clase" className="title uppercase text-center text-xl mb-2">{ clase.name }</h1>
             </div>

            <div className="clase__usuarios-registrados mb-10 py-5 grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8  lg:grid-cols-6 xl:grid-cols-12 gap-1 gap-y-1">
                <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
            </div>

                <button
                onClick={ handleReserva }
                className="bg-orange-500 block w-full py-2 absolute bottom-0 left-0"> Apuntate </button>
        </div>

    )
}