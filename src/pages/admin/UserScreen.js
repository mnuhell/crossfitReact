import React from 'react'
import {BonoScreen} from "./BonoScreen";
import {useDispatch} from "react-redux";
import {userActive} from "../../actions/user";


export const UserScreen = ( user ) => {

    const dispatch = useDispatch()
    const { name, email, telefono, bonos } = user;

    const handleSelectUser = () => {

        dispatch( userActive( user ))
    }


    return (

        <div onClick={handleSelectUser} className="border-blue-50 border-b-2 table-flex min-h-full hover:bg-blue-200 hover:text-white transition-all ease-in-out duration-200 rounded px-2 cursor-pointer">
            <div className="grid table__header sm:justify-start container mx-auto py-5">
                <p><img className="object-cover rounded-full h-12" alt={name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" /></p>
                <p className="flex items-center uppercase" >{ name }</p>
                <p className="flex items-center">{ email }</p>
                <p className="flex items-center">{ telefono }</p>
                <div className="flex items-center z-30">{ bonos.map( bono => <BonoScreen key={ bono._id} { ...bono } />) }</div>
            </div>

        </div>


    )


}