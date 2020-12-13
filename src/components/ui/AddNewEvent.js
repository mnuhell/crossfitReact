import React from 'react';
import {useDispatch} from "react-redux";
import {uiOpenModal} from "../../actions/ui";




export const AddNewEventButton = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {

        dispatch( uiOpenModal() )

    }

    return (
        <div className="z-50 flex-col mb-10 text-right ">
            <button
                onClick={handleClickNew}
                className="text-center transition-all hover:text-blue-300 duration-500 ease-in-out font-bold uppercase bg-white-500 text-blue-500 focus:outline-none">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <small>Nueva clase</small>
            </button>
        </div>
    )

}