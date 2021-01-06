import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";


const AdminHome = () => {

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
                    <div className="mx-auto container h-screen justify-center flex items-center">

                        {/* <img className="w-full" src={clases} alt="Sunset in the mountains" ></img> */}
                        <div className="px-6 py-4 text-center transition-all duration-1000 ease-in-out">
                            <Link to="/admin/create-clase">
                                <button
                                    onClick={ handleLoading }
                                    className="font-body transition-all bg-blue-800 shadow-2xl duration-1000 ease-in-out bg-transparent hover:text-blue-400 text-blue-100
                                    hover:text-white py-2 px-4 border-blue-500">
                                    <div className="w-6 mx-auto rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    Crear clase</button>
                            </Link>
                        </div>
                    </div>

                }
            </>
    )
}

export default AdminHome