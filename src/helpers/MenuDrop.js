import React from 'react';
import {useToggle} from "./toggle";
import {startLogout} from "../actions/auth";
import {useDispatch} from "react-redux";



export const MenuDrop = ({v} ) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );

    }

    return (
        <>


            </>
    )

}