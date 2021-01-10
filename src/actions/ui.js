import { types } from '../types/types';
import {useState} from "react";
import {useSelector} from "react-redux";



export const uiOpenModal = () => ({ type: types.uiOpenModal })

export const uiCloseModal = () => ({ type: types.uiCloseModal })

export const uiShowMenu   = ( value ) => ( {
    type: types.uiShowMenu,
    payload: value
})

export const uiCloseMenu = () => ({

    type: types.uiCloseMenu

})