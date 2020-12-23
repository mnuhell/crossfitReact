import React from 'react'
import {useDispatch} from "react-redux";
import {bonoActive, bonoDeleted, bonoEdited} from "../../actions/bonos";
import {BonoModal} from "./BonoModal";
import {uiCloseModal, uiOpenModal} from "../../actions/ui";



export const BonoScreen = (bono) => {

    const { name, days, precio} = bono;
    const dispatch = useDispatch();

    const handleDeleteBono = () => {

       dispatch( bonoDeleted(bono))
       dispatch( uiCloseModal())

    }

    const handleEditBono = () => {

        dispatch( bonoActive( bono ))
        //dispatch( bonoEdited( bono ))
        dispatch( uiOpenModal())
    }

    return (
        <>
            <div className="border-blue-50 border-b-2 table-flex min-h-full hover:bg-blue-200 hover:text-white transition-all ease-in-out duration-200 rounded px-2 cursor-pointer">
                <div className="grid table__header--bonos sm:justify-start container mx-auto py-5">
                    <p className="flex items-center uppercase" >{ name }</p>
                    <p className="flex items-center">{ days }</p>
                    <p className="flex items-center">{ precio }€</p>
                    <div className="grid grid-cols-2 items-center justify-items-center">
                        <span onClick={handleDeleteBono} className="delete hover:text-red-500 transition-all ease-in-out duration-500">
                            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </span>
                        <span onClick={handleEditBono} className="edit hover:text-red-500 duration-500 ease-in-out transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}