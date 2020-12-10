import React from 'react';
import {useDispatch} from "react-redux";
import {uiOpenModal} from "../../actions/ui";




export const AddNewEventButton = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {

        dispatch( uiOpenModal() )

    }

    return (
        <button
            onClick={handleClickNew}
            className="w-32 h-32 flex flex-col justify-center items-center absolute transition-all hover:text-blue-300 duration-500 ease-in-out right-0 bottom-0 font-bold uppercase mr-20 mb-10 bg-white-500 text-blue-500 text-center">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Nueva clase
        </button>
    )

}