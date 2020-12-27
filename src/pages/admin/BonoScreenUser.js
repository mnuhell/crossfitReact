import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteBonoUserModal, getAllUsers, setUserActive} from "../../actions/user";
import {uiCloseModal } from "../../actions/ui";
import { deleteHistoryBono } from '../../actions/history'




export const BonoScreenUser = (bono) => {

    const [showButtonDelete, setShowButtonDelete] = useState( false);
    const user = useSelector( state => state.user.userActive);
    const bonosState = useSelector( state => state.bonos.bonos)
    const dispatch = useDispatch();

    const { bono:name } = bono;

    const handleDeleteBono = () => {

        const data = {
            user,
            bonoId: bono._id
        }

        dispatch( deleteBonoUserModal( data ))
        dispatch( deleteHistoryBono(data))
        dispatch( uiCloseModal())
    }

    const hiddenButtonDeleteFunc = () => {

        setShowButtonDelete( false )
    }

    const showButtonDeleteFunc = () => {

        setShowButtonDelete( true )
    }

    const bonoCorrect = bonosState.find( bonoState => bonoState._id === bono.bono) || '';

    return (
        <>
            <span onClick={handleDeleteBono} onMouseEnter={ showButtonDeleteFunc }  onMouseLeave={ hiddenButtonDeleteFunc } className="bookmark flex bg-green-500  hover:bg-red-600 transition-all duration-500 ease-in-out hover:-z10 pl-3 pr-2 py-2 text-white rounded-2xl mr-3 shadow">
                <span className="bono-name mr-3 text-sm flex items-center"> {  bonoCorrect.name } </span>
                <span className="delete-bono cursor-pointer flex items-center" >
                    { (!showButtonDelete) ?
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>
                    :
                    <svg title="Borrar" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                    }
                </span>
            </span>
        </>
    )

}