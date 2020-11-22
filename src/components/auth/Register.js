import React from 'react';
import Logo from '../header/logo/Logo';
import useForm from '../hooks/useForm';



export const Register = () => {

    const [formValues, handleInputChange] = useForm({
        name: "Manuel",
        email: 'm.villa@gamil.com',
        telefono: 65034567890,
        password: 'dev12345678',
        repeatPassword: 'dev12345678'
    });

    console.log(formValues);

    const { name, email, telefono, password, repeatPassword } = formValues;



    const handleSubmitregister = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="flex justify-center flex-wrap content-center h-screen login bg-blue-500">
                <div className="login__content sm:w-1/2 md:w-1/5">
                <div className="logo flex mb-5 justify-center">
                    <Logo width="200" altTitle="Airfit App" />
                </div>
                <form onSubmit={ handleSubmitregister } className="bg-blue-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            id="telefono" type="number" placeholder="Teléfono" name="telefono" />
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
        </div>
    )
}