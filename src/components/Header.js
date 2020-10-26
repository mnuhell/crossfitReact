import React from 'react';
import Logo from './logo/Logo';
import styled from 'styled-components';

const HeaderContainer = styled.div`

`;

const Header = () => {

    return (
        <HeaderContainer className="bg-blue-700 pt-2 pb-3 px-3 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="header__right flex justify-items-start">
                    <Logo />
                </div>
                <div className="header__left flex justify-items-end justify-center">
                    <p className="text-blue-50">10 Clases Restantes&nbsp;</p>
                    <span className="text-blue-50"> | </span>
                    <p className="text-blue-50">&nbsp;Admin</p>
                </div>
                
            </div>  
        </HeaderContainer>
        
    )
}

export default Header;