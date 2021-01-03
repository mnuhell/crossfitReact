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

    /*setTimeout(function () {
        dispatch(loading(false))
    }, 1000)*/

    return (


        <>
            {
            <div className="grid items-center mx-auto container h-screen justify-center">
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
                                <span className="uppercase">Reserva tú clase</span></button>
                        </Link>
                    </div>
                </div>
            </div>

            }
        </>
    )
}
