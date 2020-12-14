import React from 'react';
import {useDispatch} from "react-redux";
import {eventStartDeleted} from "../../actions/events";




export const DeleteEventButton = () => {

    const dispatch = useDispatch();

    const HandleDeleteEvent = () => {

        dispatch( eventStartDeleted() )

    }

    return (
        <div className="float-left z-50 text-right transition-all hover:text-blue-300 duration-500 ease-in-out bg-red-600 rounded pr-3 pt-2 pb-2 px-1">
            <button
                onClick={HandleDeleteEvent}
                className="flex items-center justify-center justify-items-center text-center font-bold uppercase text-white-500 focus:outline-none">
                <svg className="w-10 text-white float-left pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <small className="text-white uppercase text-right">Eliminar clase</small>
            </button>

        </div>
    )

}