import React from 'react';
import Logo from './header/logo/Logo';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <>
            <header className="bg-blue-700 pt-3 pb-5 fixed w-full z-40">
                <div className="container mx-auto flex justify-between items-center px-3 -z-50 relative">

                    <div className="header__right flex justify-items-start">
                        <Link to="/">
                            <Logo width="160" altTitle="Airfit App" />
                        </Link>
                    </div>

                    <Link to="/login">
                        <p className="text-white text-md">Login</p>
                    </Link>
                </div>
            </header>
        </>

    )
}

export default Header;