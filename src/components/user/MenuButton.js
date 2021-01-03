import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import Swal from 'sweetalert2';
import {ClasesPending} from "./ClasesPending";

export const MenuButton = ( { name, uid } ) => {
    
    const dispatch = useDispatch();

    const handleLogout = () => {

        Swal.fire({
            title: '¿Salir de la aplicación?',
            showDenyButton: true,
            showconfirmButton: true,
            confirmButtonText: '<button class="confirm mr-3 bg-blue-500 flex text-white px-8 py-2 uppercase rounded">!Adios! 😢</button>',
            denyButtonText: '<button class="denny bg-red-500 flex text-white px-8 py-2 uppercase rounded">!Me quedo! 😜</button>',
        }).then((result) => {

            if (result.isConfirmed) {
                dispatch( startLogout() );
            } else if (result.isDenied) {
                return null
            }
        })
    }
    
    return (

       <>
           <div className="relative flex justify-center flex-col mr-3 text-right">
               <span className="mr-2 flex items-end uppercase text-xs">{name} </span>
               <span className="uid-menu">{uid}</span>
           </div>

        <div className="rounded-full h-8 w-8 overflow-hidden ">
            <ClasesPending />
            <button onClick={ handleLogout }>
                <img className=" bg-cover" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                    alt={name} title={name} />
            </button>
        </div>
        </>
    )
}