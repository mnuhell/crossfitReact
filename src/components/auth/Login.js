import React from 'react';
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { startLogin } from '../../actions/auth';
import {getBonosState} from "../../actions/bonos";

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
            <div className="login__content sm:w-1/1 lg:w-1/4">
                <div className="login__content flex flex-col justify-center">
                    <form onSubmit={ handleSubmitLogin } className="bg-blue-600 shadow-md rounded">
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
                        <div className="grid grid-cols-2 gap-6 items-right justify-between uppercase">
                            <button className="bg-blue-50 hover:bg-blue-100 text-sm text-blue-500 py-2 px-6 border rounded shadow items-end uppercase" type="submit">
                                entrar
                            </button>
                            <Link to="/register" className="flex items-center text-sm justify-center bg-blue-50 hover:bg-blue-100 text-blue-500 py-2 px-6 border rounded shadow " type="submit">
                                regístrate
                            </Link>
                            </div>
                            <div className="text-right mt-3 block">
                                <Link to="/forgot" className="text-right text-white text-sm ">Recuperar contraseña</Link>
                            </div>
                    </form>
                </div>
            </div>
        </div>
            </>
    )
}
