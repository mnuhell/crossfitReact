import React from 'react'




export const BonoScreen = ( bono ) => {


    const handleDeleteBono = () => {

        console.log( bono._id )
    }

    return (
        <>
            <span className="flex bg-blue-500 pl-3 pr-2 py-2 text-white rounded-2xl mr-3 shadow">
                <span className="bono-name mr-3 text-sm flex items-center"> { bono.name } </span>
                <span className="delete-bono cursor-pointer flex items-center" onClick={handleDeleteBono}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
            </span>
        </>
    )

}