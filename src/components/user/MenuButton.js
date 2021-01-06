import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ClasesPending} from "./ClasesPending";
import {uiShowMenu} from "../../actions/ui";
import {MenuDrop} from "../../helpers/MenuDrop";

export const MenuButton = ( { name, uid } ) => {

    const dispatch = useDispatch();
    const value = useSelector( state => state.ui.showMenu)

    const showMenu = () => {
        ( value ) ? dispatch( uiShowMenu( false ) ) : dispatch( uiShowMenu( true ));
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
               <MenuDrop
                   value={ value }
               />

        </>
    )
}