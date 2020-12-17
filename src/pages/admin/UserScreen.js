import React, {useEffect} from 'react';
import {getAllUsers} from "../../actions/user";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";

import MUIDataTable from 'mui-datatables';

export const UserScreen = () => {

    const columns = [ 'name', 'email', 'telefono', 'bonos'];
    const options = {
        filterType: 'checkbox',
        responsive: 'vertical',
    };



    const dispatch = useDispatch();
    const active = useSelector(state => state.loading.active);
    const users = useSelector( state => state.user.usersFilter );
    const bonos = useSelector( state => state.bonos);

    setTimeout(() => {
        dispatch(loading(false))
    }, 1000)

    useEffect( () => {
        dispatch( getAllUsers() )

    },[ dispatch])


    return (

        ( active ) ? <LoadingApp /> :

        <section className="w-full px-3">
            <div className="pt-32 flex flex-col justify-between container mx-auto items-center">
                <h1 className="text-2xl font-bold w-full flex justify-center uppercase mb-10">Usuarios</h1>
                <MUIDataTable
                className="w-full"
                title={ "Usuarios"}
                columns={ columns }
                data={ users }
                options={options}
                onFilterDialogOpen={ true }

                />
            </div>
        </section>

    )

}