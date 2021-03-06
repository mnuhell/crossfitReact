import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
import Logo from '../header/logo/Logo';
import useForm from '../hooks/useForm';



export const Register = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState()

    const [formValues, handleInputChange] = useForm({
        name: "chacho",
        email: 'm.villa@gamil.com',
        telefono: '000000',
        password: '0000000',
		bonos:[],
        repeatPassword: '000000',
        role: '9358u409587'
    });

    const { name, email, telefono, password, repeatPassword, bonos } = formValues;

    const handleSubmitregister = (e) => {
        e.preventDefault();

        if( password !== repeatPassword) {
            setError(true)
            setTextError('las contraseñas no coinciden');
            return;
        }

        if ( name.trim() === "" || email.trim() === "" || password.trim() === "" || telefono.trim() === "") {
            setError(true)
            setTextError('Por favor, los campos no pueden estar vacios');
            return;
        }

        dispatch(startRegister({
            name: name.toLowerCase(),
            email: email.toLowerCase(),
            telefono: telefono,
			bonos: bonos,
            password: password,

        }))

    }

    return (
        <div className="grid items-center mx-auto h-screen login w-1/1 md:w-1/2 lg:w-1/3 px-6">

                <form onSubmit={handleSubmitregister} className="pt-6 pb-8 mb-4">
                    {
                        error ? <div className="rounded error_message bg-red-400 py-2 px-8 mb-4 mx-auto">
                                    <p className="text-xs text-white"> { textError }</p>
                                </div>
                               : ""
                    }

                    <div className="mb-4">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Nombre" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-50 text-sm font-bold" htmlFor="telefono">
                            Teléfono
                        </label>
                        <input
                        name="telefono"
                        value={ telefono }
                        onChange={ handleInputChange }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="telefono" type="number" placeholder="Teléfono" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                            <input
                            name="password"
                            onChange={ handleInputChange }
                            value={ password }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="repeatPassword">
                            Repita la contraseña
                        </label>
                            <input
                            name="repeatPassword"
                            onChange={ handleInputChange }
                            value={ repeatPassword }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="repeatPassword" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-right justify-between">
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-500  py-1 px-6 border rounded shadow items-end" type="submit">
                            registrar Usuario
                        </button>
                    </div>
                </form>
        </div>
    )
}
