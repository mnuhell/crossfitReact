import React from 'react';
import {startLogout} from "../actions/auth";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";



export const MenuDrop = ({value} ) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );

    }

    return (
        <>
            {(value) ?

                <nav className="nav-menu dropdown-menu absolute bg-blue-700 text-blue-50 text-left right-0 -mt-3">
                    <ul>
                        <li className="py-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">
                            <button onClick={handleLogout}>
                                Salir de la cuenta
                            </button>
                        </li>
                        <li className="py-2 pb-2 pr-8 pl-2 transition-all duration-200 hover:bg-blue-400">

                            <Link to="">
                                Configura tu cuenta
                            </Link>
                        </li>

                    </ul>
                </nav>
                :
                null
            }
        </>
    )
}