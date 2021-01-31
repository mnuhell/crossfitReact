import React, {useEffect, useState} from 'react';
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
    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: ''
    });

    let sortedUsers = [ ...users]


    if( sortConfig !== null) {

        sortedUsers.sort((a, b) => {
            if( a[sortConfig.key.toLocaleLowerCase()] < b[sortConfig.key.toLocaleLowerCase()]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if( a[sortConfig.key.toLocaleLowerCase()] > b[sortConfig.key.toLocaleLowerCase()] ) {
                return sortConfig.direction === 'ascending' ? 1 : -1 ;
            }

            return 0;
        })
    }

    const requesSort = key => {
        let direction = 'ascending';

        if( sortConfig.key === key && sortConfig.direction === 'ascending')
        {
            direction = 'descending'
        }

        setSortConfig( { key, direction })
    }

    console.log(sortedUsers)


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
            <table className="table-auto border border-collapse border-blue-400 container mx-auto">
                <thead className="text-white border ">
                    <tr>
                        <th className="py-2 px-3 border border-white-600">Imagen</th>
                        <th className="border border-white-600" onClick={() => requesSort('name')}>Nombre</th>
                        <th className="border border-white-600" onClick={() => requesSort('email')}>Email</th>
                        <th className="border border-white-600" onClick={() => requesSort('telefono')}>Telefono</th>
                        <th className="border border-white-600" onClick={() => requesSort('bonos')}> Bonos activos</th>
                        <th className="border border-white-600" onClick={() => requesSort('precio')}> Precios</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        sortedUsers.map( user => <UserScreen key={user._id} { ...user } />)
                    }
                </tbody>

            </table>

        <UserModal />

        </section>
        </>
    )

}