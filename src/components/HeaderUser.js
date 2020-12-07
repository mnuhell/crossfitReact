import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from './header/logo/Logo';
import {MenuButton} from './user/MenuButton'
import styled from 'styled-components';
import { ClasesPending } from './user/ClasesPending';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

`;

const Header = () => {

    const user = useSelector(state => state.auth)
    const { totales } = useSelector(state => state.clases);

    const showMessageInfo = (message) => {
        if(totales === -1) {
            return (
                <div className="alert-header py-3 -mt-3 xs:py-4 xl:px-0 flex items-center uppercase font-bold justify-center mb-4 bg-blue-900 text-xs text-blue-100">
                    <p> 
                        <div className="w-5 float-left justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </p>
                    {message}
                </div>
            )
        }
    }

    return (
        <>
            <HeaderContainer className="bg-blue-500 pt-3 pb-5 fixed w-full z-40">
                { showMessageInfo("No tienes bono activo, por favor renueva tu bono para seguir reservando clases") }
                <div className="container mx-auto flex justify-between items-center px-3">

                    <div className="header__right flex justify-items-start">
                        <Link to="/">
                            <Logo width="160" altTitle="Airfit App" />
                        </Link>

                    </div>
                    <div className="header__left flex justify-items-end justify-center overflow-hidden">
                        <ClasesPending {...user } />
                        <MenuButton { ...user } />
                    </div>
                </div>
            </HeaderContainer>
        </>

    )
}

export default Header;