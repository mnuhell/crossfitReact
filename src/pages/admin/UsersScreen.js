import React, {useEffect} from 'react';
import {getAllUsers} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";

import {UserScreen} from "./UserScreen";
import {UserModal} from "./UserModal";
import {HeaderTable} from "../../components/admin/table/HeaderTable";
import {BodyTable} from "../../components/admin/table/BodyTable";
import {UsersTable} from "../../components/admin/table/UsersTable";

export const UsersScreen = () => {

    const dispatch = useDispatch();
    const active = useSelector(state => state.loading.active);

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

                <UsersTable />

            </div>

        <UserModal />

        </section>
        </>
    )

}