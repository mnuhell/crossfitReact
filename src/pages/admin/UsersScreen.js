import React, {useEffect} from 'react';
import {getAllUsers} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";

import {UserScreen} from "./UserScreen";

export const UsersScreen = () => {

    const dispatch = useDispatch();
    const active = useSelector(state => state.loading.active);
    const users = useSelector( state => state.user.users );

    setTimeout(() => {
        dispatch(loading(false))
    }, 1000)

    useEffect( () => {
        dispatch( getAllUsers() )

    },[ dispatch])


    return (

        ( active ) ? <LoadingApp /> :

        <section className="w-full px-3 pt-32 font-body">
            <h1 className="text-2xl font-bold w-full flex justify-center uppercase mb-10">Usuarios</h1>
            <div className="container mx-auto flex-col items-center table-container py-3">
                <div className="grid shadow-2xl lg:grid-cols-5 sm:grid-cols-1 sm:hidden md:grid table__header justify-between bg-blue-500 text-white uppercase rounded px-2 py-3">
                    <span>Nombre</span>
                    <span>Email</span>
                    <span>Telefono</span>
                    <span className="px-2"> Bonos activos</span>
                    <span className="px-2"> Acciones</span>
                </div>
                {
                    users.map( user => <UserScreen key={user._id} { ...user } />)
                }
            </div>
        </section>

    )

}