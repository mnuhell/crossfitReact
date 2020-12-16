import React, {useEffect} from 'react';
import {getAllUsers} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";



export const UserScreen = () => {

    const dispatch = useDispatch();
    const active = useSelector(state => state.loading.active);

    setTimeout(() => {
        dispatch(loading(false))
    }, 1500)

    useEffect( () => {
        dispatch( getAllUsers() )
    },[ dispatch])


    return (

        ( active ) ? <LoadingApp /> :

        <section className="w-full px-3">
            <div className="pt-32 flex justify-between container mx-auto items-center">
                <h1 className="text-2xl font-bold w-full flex justify-center uppercase">Usuarios</h1>

            </div>
        </section>

    )

}