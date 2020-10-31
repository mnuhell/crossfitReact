import React from 'react';

import clases from '../../../src/assets/clases.png';

export const UserHome = () => {

    return (
        <div className="flex flex-wrap items-center h-screen justify-center">
            <div className="w-full md:w-1/4 lg:mr-5 md:mr-5 rounded overflow-hidden shadow-lg">
                <img className="w-full" src={clases} alt="Sunset in the mountains" ></img>
                <div className="px-6 py-4 text-center">
                    <button 
                    className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold 
                    hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
                    rounded">Reserva tu clase</button>
                </div>
            </div>

            <div className="w-full md:w-1/4 rounded overflow-hidden shadow-lg">
                <img className="w-full" src={clases} alt="Sunset in the mountains" ></img>
                <div className="px-6 py-4 text-center">
                    <button 
                    className="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold 
                    hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
                    rounded">Tu configuracion</button>
                </div>
            </div>
        </div>
    )
}