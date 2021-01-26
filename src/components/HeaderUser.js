import React from 'react';
import {useSelector} from 'react-redux';
import Logo from './header/logo/Logo';
import {MenuButton} from './user/MenuButton'
import { Link } from 'react-router-dom';
import {MenuDrop} from "../helpers/MenuDrop";



const Header = () => {

    const user = useSelector(state => state.auth)
    const { totales } = useSelector(state => state.clases);

    const value  = useSelector( state => state.ui.showMenu);


    const showMessageInfo = () => {

        if( totales  === 0) {
            return "Tu bono esta agotado, renuevalo cuanto antes para pdoer seguir reservando tús clases"
        }
        if( totales === 1) {
            return "Tu bono esta próximo a agotarse. No olvides renovarlo en tu próxima visita al box";
        }

    }

    return (
        <>
            <header className="bg-blue-700 pt-3 pb-5 fixed w-full z-40">
                {(totales <= 1) ?
                    <div
                        className="alert-header font-body py-1 px-3 -mt-3 xs:py-4 xl:px-0 flex items-center uppercase font-bold justify-center mb-4 bg-yellow-500 text-blue-900">
                        <div>
                            <div
                                className="w-4 float-left justify-center mr-2 xs:py-5 xs:h-12 lg:h-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div className="flex items-center xs:h-12 lg:h-6">
                                {showMessageInfo()}
                            </div>

                        </div>

                    </div>
                    : ''
                }

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