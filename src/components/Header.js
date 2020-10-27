import React from 'react';
import Logo from '../components/header/logo/Logo';
import {MenuButton} from '../components/user/MenuButton'
import styled from 'styled-components';
import { ClasesPending } from './user/ClasesPending';

const HeaderContainer = styled.div`

`;

const Header = () => {

    return (
        <HeaderContainer className="bg-blue-700 pt-2 pb-3 px-3 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="header__right flex justify-items-start">
                    <Logo />
                </div>
                <div className="header__left flex justify-items-end justify-center overflow-hidden">
                    <ClasesPending />
                    <MenuButton />
                </div>
            </div>  
        </HeaderContainer>
        
    )
}

export default Header;