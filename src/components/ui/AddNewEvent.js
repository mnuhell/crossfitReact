import React from 'react';
import {useDispatch} from "react-redux";
import {uiOpenModal} from "../../actions/ui";
import {eventSetActive} from "../../actions/events";




export const AddNewEventButton = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {

        dispatch( uiOpenModal() )
        dispatch( eventSetActive( null ))

    }

    return (

        <div className="float-right z-50 text-right transition-all hover:text-blue-300 duration-500 ease-in-out bg-blue-500 rounded pr-3 pt-2 pb-2 px-1">
            <button
                onClick={handleClickNew}
                className="flex items-center justify-center justify-items-center text-center font-bold uppercase text-white-500 focus:outline-none">
                <svg className="w-10 text-white float-left pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <small className="text-white uppercase text-right">Nueva clase</small>
            </button>

        </div>
    )

}