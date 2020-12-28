import React from 'react';
import useForm from '../hooks/useForm';
import Logo from '../header/logo/Logo';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { startLogin } from '../../actions/auth';
import { loading } from '../../actions/loading';
import {getBonosState} from "../../actions/bonos";
import {LoadingApp} from "../LoadingApp";

export const Login = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        email: 'user@gmail.com',
        password: 'dev12345678'
    })
    const { email, password } = formValues;

    const bonos = localStorage.getItem('bonos') ;

    const handleSubmitLogin = async(e) => {
        e.preventDefault();

        dispatch(startLogin(email, password))
        if( bonos ) {
            dispatch( getBonosState( JSON.parse(bonos) ))
        } else {
            localStorage.setItem('bonos', [])
        }

    }

    return (

        <>
        <div className="flex justify-center flex-wrap content-center h-screen login bg-blue-500">
            <div className="login__content sm:w-1/3">
                <div className="logo flex mb-5 justify-center">
                    <Logo width="200" altTitle="Airfit App" />
                </div>
                <form onSubmit={ handleSubmitLogin } className="bg-blue-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                        name="email"
                        value={email}
                        onChange={ handleInputChange }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                        name="password"
                        onChange={ handleInputChange }
                        value={password}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-right justify-between">
                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-500  py-1 px-6 border rounded shadow items-end" type="submit">
                        entrar
                    </button>
                    <Link to="/register" className="bg-blue-50 hover:bg-blue-100 text-blue-500 py-1 px-6 border rounded shadow items-end" type="submit">
                        nuevo usuario
                    </Link>
                    </div>
                </form>
            </div>
        </div>
            </>
    )
}
