import React from 'react';
import {startLogout} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loading} from "../actions/loading";



export const MenuDrop = ({value} ) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const { role } = user;

    const handleLogout = () => {
        dispatch( startLogout() );

    }
    const handleLoading = () => {

        dispatch( loading( true ) )

    }


    return (
        <>
            {(value && role.name === 'admin') ?

                <nav className="nav-menu dropdown-menu absolute bg-blue-700 text-blue-50 text-left right-0 -mt-3">
                    <ul>

                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link onClick={handleLoading} to={{pathname: "/admin/create-clase"}}>
                                Crear Clase
                            </Link>
                        </li>
                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link onClick={handleLoading} to={{pathname: "/admin/users"}}>
                                Usuarios
                            </Link>
                        </li>
                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link onClick={handleLoading} to={{pathname: "/admin/bonos"}}>
                                Bonos
                            </Link>
                        </li>

                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link to="">
                                Configuración
                            </Link>
                        </li>
                        <hr/>
                        <li className="py-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">
                            <button onClick={handleLogout}>
                                Salir de la cuenta
                            </button>
                        </li>
                    </ul>
                </nav>
                : null
            }
            {
                ( value && role.name === 'user' ) ?
                <nav className="nav-menu dropdown-menu absolute bg-blue-700 text-blue-50 text-left right-0 -mt-3">
                    <ul>
                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link to="">
                                Configuración
                            </Link>
                        </li>
                        <hr/>
                        <li className="py-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">
                            <button onClick={handleLogout}>
                                Salir de la cuenta
                            </button>
                        </li>

                    </ul>
                </nav>
                    : null
            }
        </>
    )
}