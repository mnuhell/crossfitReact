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
            className="rounded-full w-20 h-20 absolute right-0 bottom-0 mr-10 bg-blue-500 text-white text-center">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </button>
    )

}