import React from 'react'
import {useSelector} from "react-redux";




export const BonoScreenUserView = (bono) => {

    const bonosState = useSelector( state => state.bonos.bonos)

    const bonos = bonosState.find( bonoState => bonoState._id === bono.bono);

    return (
        <>
            <span className="bookmark uppercase leading-5 bg-green-500 text-md grid items-center text-center justify-items-center pl-2 pr-2 py-1 mb-1 text-white rounded-lg mr-3 shadow">
               {  bonos?.name }
                {/* <span className="delete-bono cursor-pointer inline-flex items-center justify-items-center ml-1" >

                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                    </svg>

                </span> */}
            </span>
        </>
    )

}
