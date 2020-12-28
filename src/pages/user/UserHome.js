import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loading } from '../../actions/loading';
import { LoadingApp } from '../../components/LoadingApp';


export const UserHome = () => {

    const dispatch = useDispatch();
    const active = useSelector(state => state.loading.active);

    const handleLoading = () => {

        dispatch( loading( true ) )
    }

    setTimeout(function () {
        dispatch(loading(false))
    }, 1000)

    return (


        active ? <LoadingApp /> :
        <>
            {
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-20 items-center mx-auto container pt-32 h-screen justify-center">
                <div className="">
                    {/* <img className="w-full" src={clases} alt="Sunset in the mountains" ></img> */}
                    <div className="px-6 py-4 text-center border-b-2 border-blue-500 hover:border-blue-300 transition-all duration-1000 ease-in-out">
                        <Link to="/user/reserva">
                            <button
                            onClick={ handleLoading }
                            className="font-body transition-all duration-1000 ease-in-out bg-transparent hover:text-blue-300 text-blue-500
                            hover:text-white py-2 px-4 border-blue-500 hover:border-transparent
                            ">
                                <div className="w-6 mx-auto rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <span>Reserva tú clase</span></button>
                        </Link>
                    </div>
                </div>
                <div className="">
                    {/* <img className="w-full" src={configImagen} alt="Sunset in the mountains" ></img> */}
                    <div className="px-6 py-4 text-center border-b-2 border-blue-500 hover:border-blue-300 transition-all duration-1000 ease-in-out">
                        <Link to="/user/settings" title="En construcción">
                            <button
                            className="font-body transition-all duration-1000 ease-in-out bg-transparent hover:text-blue-300 text-blue-500
                            hover:text-white py-2 px-4 border-blue-500 hover:border-transparent
                            " disabled>
                                <div className="w-6 mx-auto rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <span>Tu configuración</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            }
        </>
    )
}
