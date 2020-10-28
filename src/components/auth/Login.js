import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import { login } from '../../actions/auth'
import {axiosIntance, LOGIN} from '../../api/endpoint/config';

export const Login = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'user@teddyminds.es',
        password: 'dev12345678'
    })
    const { email, password } = formValues;

    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

        await axiosIntance.post(`${LOGIN}`, user, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        }).then( user => {
            dispatch( login(user.data) )
            localStorage.setItem('user', user.data ) 
        }).catch( e => {
            console.log(e)
        })

    }

    return (
        <div className="flex justify-center flex-wrap h-screen content-center">
            <form onSubmit={ handleSubmitLogin } className="bg-white shadow-md sm:w-1/3 rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                    name="email"
                    value={email}
                    onChange={ handleInputChange }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                    name="password"
                    onChange={ handleInputChange }
                    value={password}
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-right justify-between">
                <button className="bg-blue-600 hover:bg-blue-400 text-blue-50 font-semibold py-2 px-4 border border-gray-400 rounded shadow items-end" type="submit">
                    Login
                </button>
                </div>
            </form>
        </div>
    )
}