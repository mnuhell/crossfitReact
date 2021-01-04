import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteBonoUserModal, getAllUsers, setUserActive} from "../../actions/user";
import {uiCloseModal } from "../../actions/ui";
import { deleteHistoryBono } from '../../actions/history'




export const BonoScreenUserView = (bono) => {

    const bonosState = useSelector( state => state.bonos.bonos)

    const bonos = bonosState.find( bonoState => bonoState._id === bono.bono) || '';

    return (
        <>
            <span className="bookmark flex bg-green-500 pl-3 pr-2 py-2 text-white rounded-2xl mr-3 shadow">
                <span className="bono-name mr-3 text-sm flex items-center"> {  bonos.name } </span>
                <span className="delete-bono cursor-pointer flex items-center" >

                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>

                </span>
            </span>
        </>
    )

}