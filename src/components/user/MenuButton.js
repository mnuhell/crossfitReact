import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import {ClasesPending} from "./ClasesPending";
import {useToggle} from "../../helpers/toggle";
import {Link} from "react-router-dom";

export const MenuButton = ( { name, uid } ) => {

    const dispatch = useDispatch();

    const [ value, showMenu ] = useToggle()

    const handleLogout = () => {
        dispatch( startLogout() );

    }



    return (

       <>
           <div className="relative flex justify-center flex-col mr-3 text-right text-white">
               <span className="uppercase text-xs">{name} </span>
               <span className="uid-menu">{uid}</span>
           </div>

        <div className="rounded-full h-8 w-8 overflow-hidden">
            <ClasesPending />
            <button onClick={ showMenu }>
                <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                    alt={name} title={name} />
            </button>
        </div>

           { (!value) ?

               <nav className="nav-menu dropdown-menu absolute bg-blue-500 text-blue-50 text-left">
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