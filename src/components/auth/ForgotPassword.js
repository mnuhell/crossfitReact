import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {authForgotPassword, resetPassord} from "../../actions/auth";
import {Link} from "react-router-dom";


export const ForgotPassword = () => {


	const dispatch = useDispatch()

	const [formValues, setFormValues] = useState({
		email: 'manufit78@gmail.com',
		code: ''
	});

	const [ message, setMessage ] = useState('')
	const [error, setError] = useState(false);
	const [showCodeValidForm, setShowCodeValidForm] = useState(false);

	const { email, code } = formValues;

	const handleInputChange = ( { target }) => {

		if( target.name.trim() !== "") {
			setError(false)
		}

		setFormValues({
			...formValues,
			[ target.name ]: target.value
		});

	}

	const handleSendEmail = (e) => {
		e.preventDefault();
		if( email.trim() === "") {
			setMessage("El email no puede estar vacio");
			setError(true)
			return;
		}
		setShowCodeValidForm( true )
		dispatch( authForgotPassword(email))

	}

	const returnEmailView = () => {
		setShowCodeValidForm( false )
	}

	const handleCodeValid = (e) => {
		e.preventDefault();

		console.log( " codifo enviado ")

	}

	return (
		<>
			{ !showCodeValidForm ?
				<div className="h-screen login bg-blue-500 flex flex-col items-center justify-center font-body container mx-auto px-3">
					<div className="md:w-1/2 lg:w-1/3">
						<h2 className="text-white mb-2 text-2xl flex block mb-8">Recupera tu cuenta de Airfit</h2>
						<div className="forgot-password flex items-center justify-start ">
						<form onSubmit={handleSendEmail} className="w-full">
							<p className="text-white mb-2 text-md block">Correo electrónico</p>
							<div className="forgot-password__content flex flex-col content-center">
								<input onChange={handleInputChange} value={ email } name="email" type="email" placeholder="dlskadnñaskl" className="py-3 px-2"/>
								{ (error) ? <p className="bg-red-500 py-1 flex items-center justify-center text-sm text-white">{ message }</p> : null }
								<button className="py-2 px-6 bg-blue-900 uppercase text-white mt-3"> enviar </button>
							</div>
						</form>
						</div>
					</div>
				</div>
			:
			<div className="h-screen login bg-blue-500 flex flex-col items-center justify-center font-body container mx-auto px-3 pt-12">
				<div className="md:w-1/2 lg:w-1/3">
					<h2 className="text-white mb-2 text-xl flex block mb-8">Introduce el código que has recibido por correo para cambiar la contraseña</h2>
					<div className="forgot-password flex items-center justify-start ">
						<form onSubmit={handleCodeValid} className="w-full">
							<p className="text-white mb-2 text-md block">Código</p>
							<div className="forgot-password__content flex flex-col content-center">
								<input onChange={handleInputChange} value={ code } name="code" type="text" placeholder="dlskadnñaskl" className="py-3 px-2"/>
								<button className="py-2 px-6 bg-blue-900 uppercase text-white mt-3"> recuperar </button>
							</div>
						</form>

					</div>
					<button onClick={ returnEmailView } className="text-white my-4 text-right text-xs mb-10"> Volver a recibir el código</button>
				</div>
			</div>
			}


			</>
	)


}
