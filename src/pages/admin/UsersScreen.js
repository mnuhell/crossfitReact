import React, {useEffect} from 'react';
import {getAllUsers} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";

import {UserScreen} from "./UserScreen";
import {UserModal} from "./UserModal";

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
        <>
        <section className="w-full px-3 pt-32 font-body pb-32 ">
            <h1 className="text-2xl font-bold w-full flex justify-center uppercase mb-5 text-white">Usuarios</h1>
            <div className="search container mx-auto xl:min-h-full focus:outline-none focus:shadow-none mb-5">
                <input className="h-10 px-5 text-xl w-full bg-blue-700 text-white" type="text" placeholder="Buscar..." />
            </div>
            <div className="container mx-auto flex-col items-center table-container py-3">
                <div className="grid shadow-2xl table__header justify-between bg-blue-700 text-white uppercase rounded px-5 py-5">
                    <span>Imagen</span>
                    <span>Nombre</span>
                    <span>Email</span>
                    <span>Telefono</span>
                    <span className="px-2"> Bonos activos</span>
                    <span className="px-2 items-center"> Precios</span>
                </div>
                    {
                        users.map( user => <UserScreen key={user._id} { ...user } />)
                    }
            </div>

        <UserModal />

        </section>
        </>
    )

}