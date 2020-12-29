import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './header/logo/Logo';


export const Home = () => {

    return (
        <>
        <div className="home flex justify-center items-center h-screen bg-blue-500">
            <div className="home__content">
                <Logo width="300" altTitle="Airfit App" />
                <div className="home__content-link mt-5 flex justify-between">
                    <Link to="/login" className="text-xs text-blue-50 uppercase">Login</Link>
                    <Link to="/registrar" className="text-xs text-blue-50 uppercase">register</Link>
                </div>
            </div>
        </div>
        </>
        
    )
}