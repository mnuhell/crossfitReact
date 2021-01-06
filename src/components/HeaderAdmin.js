import React from 'react';
import Logo from '../components/header/logo/Logo';
import {MenuButton} from './user/MenuButton'
import { Link } from 'react-router-dom';

import {useSelector} from "react-redux";

const Header = () => {

    const user = useSelector(state => state.auth)

    return (
        <header className="bg-blue-700 pt-3 pb-5 fixed w-full z-40">
            <div className="container mx-auto flex justify-between items-center relative">
                <div className="header__right flex justify-items-start">
                    <Link to="/">
                    <Logo width="160" altTitle="Airfit App" />
                    </Link>
                    
                </div>
                <div className="header__left flex justify-items-end justify-center overflow-hidden">
                    <MenuButton {...user}  />

                </div>

            </div>

        </header>
        
    )
}

export default Header;