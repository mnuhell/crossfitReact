import React from 'react'
import {BonoScreen} from "./BonoScreen";


export const UserScreen = ( user ) => {

    const { name, email, telefono, bonos } = user;

    const handleSelectuser = () => {

        console.log( name )
    }


    return (

        <div className="border-blue-50 border-b-2 table-flex min-h-full hover:bg-blue-200 hover:text-white transition-all ease-in-out rounded px-2">
            <div className="grid lg:grid-cols-5 sm:grid-cols-1 sm:justify-start container mx-auto py-3">
                <p className="flex items-center uppercase" onClick={handleSelectuser} >{ name }</p>
                <p className="flex items-center">{ email }</p>
                <p className="flex items-center">{ telefono }</p>
                <div className="flex items-center z-30">{ bonos.map( bono => <BonoScreen key={ bono._id} { ...bono } />) }</div>
                <p className="flex items-center justify-end">
                    <span className="delete-bono cursor-pointer mr-5">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </span>
                    <span className="delete-bono cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>

                </p>
            </div>

        </div>


    )


}