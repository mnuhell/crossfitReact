import React from 'react';
import {useSelector} from 'react-redux';
import Logo from './header/logo/Logo';
import {MenuButton} from './user/MenuButton'
import { Link } from 'react-router-dom';
import {MenuDrop} from "../helpers/MenuDrop";
import {HeaderMessage} from "./alerts/HeaderMessage";



const Header = () => {

    const user = useSelector(state => state.auth)
    const { totales } = useSelector(state => state.clases);

    const value  = useSelector( state => state.ui.showMenu);

    return (
        <>
            <header className="bg-blue-700 pt-3 pb-5 fixed w-full z-40">
                <HeaderMessage totalClasses={ totales } />
                <div className="container mx-auto flex justify-between items-center px-3 -z-50 relative">

                    <div className="header__right flex justify-items-start">
                        <Link to="/">
                            <Logo width="160" altTitle="Airfit App" />
                        </Link>

                    </div>
                    <div className="header__left flex justify-items-end justify-center overflow-hidden">
                        <MenuButton { ...user } />
                    </div>
                    <MenuDrop
                        value={ value }
                    />
                </div>

            </header>
        </>

    )
}

export default Header;