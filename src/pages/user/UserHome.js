import React from 'react';
import { useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import clases from '../../../src/assets/clases.png';
import configImagen from '../../../src/assets/config_imagen.png';
import { loading } from '../../actions/loading';


export const UserHome = () => {

    const dispatch = useDispatch()

    const handleLoading = () => {
        
        dispatch( loading( true ) )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center gap-12 mx-auto container pt-32 h-screen justify-center">
            <div className="rounded shadow-lg">
                <img className="w-full" src={clases} alt="Sunset in the mountains" ></img>
                <div className="px-6 py-4 text-center">
                    <Link to="/user/reserva">
                        <button
                        onClick={ handleLoading } 
                        className="font-body transition-all duration-1000 ease-in-out bg-transparent hover:bg-blue-700 text-blue-500 font-semibold 
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
                        rounded ">Reserva tu clase</button>
                    </Link>
                </div>
            </div>
            <div className="shadow-lg">
                <img className="w-full" src={configImagen} alt="Sunset in the mountains" ></img>
                <div className="px-6 py-4 text-center">
                    <Link to="/user/settings">
                        <button
                        className="font-body transition-all duration-1000 ease-in-out bg-transparent hover:bg-blue-700 text-blue-500 font-semibold
                        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent
                        rounded">Tu configuracion</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}