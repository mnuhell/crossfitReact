import React from 'react';
import Logo from '../components/header/logo/Logo';
import {MenuButton} from '../components/user/MenuButton'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

`;

const Header = () => {

    return (
        <HeaderContainer className="bg-blue-500 pt-2 pb-3 px-3 fixed w-full z-40">
            <div className="container mx-auto flex justify-between items-center">
                <div className="header__right flex justify-items-start">
                    <Link to="/">
                    <Logo width="120" altTitle="Airfit App" />
                    </Link>
                    
                </div>
                <div className="header__left flex justify-items-end justify-center overflow-hidden">
                    <MenuButton />
                </div>
            </div>  
        </HeaderContainer>
        
    )
}

export default Header;