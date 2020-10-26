import React from 'react';
import Logo from './logo/Logo';
import styled from 'styled-components';

const HeaderContainer = styled.div`

`;

const Header = () => {

    return (
        <HeaderContainer className="bg-blue-800 pt-2 pb-3 px-3">
            <Logo />
            
        </HeaderContainer>
        
    )
}

export default Header;