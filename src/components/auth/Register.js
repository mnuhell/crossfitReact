import React from 'react';
import Logo from '../header/logo/Logo';
import { Link } from 'react-router-dom';



export const Register = () => {

    return (
        <div className="flex justify-center flex-wrap h-screen content-center login bg-blue-500">
            <div className="login__content sm:w-1/4">
                <div className="logo flex mb-5 justify-center">
                    <Logo width="200" altTitle="Airfit App" />
                </div>
                <form className="bg-blue-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1>Register</h1>
                </form>
            </div>
        </div>
    )
}