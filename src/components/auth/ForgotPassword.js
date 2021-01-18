import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {authForgotPassword} from "../../actions/auth";


export const ForgotPassword = () => {


	const dispatch = useDispatch()

	const [formValues, setFormValues] = useState({
		email: 'tuemail@gmail.com'
	});

	const [ message, setMessage ] = useState('')
	const [error, setError] = useState(false);

	const { email } = formValues;

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
		}

		dispatch( authForgotPassword(email))

	}


	return (

		<div className="forgot-password h-screen flex items-center justify-center login bg-blue-500 font-body py-6">
			<form onSubmit={handleSendEmail}>
				<div className="forgot-password__content flex flex-col justify-center flex-wrap content-center px-6">
					<p className="text-white mb-2 text-lg uppercase">Introduce tu email para recuprar tu contraseña</p>

					<input onChange={handleInputChange} value={ email } name="email" type="email" placeholder="dlskadnñaskl" className="py-3 px-2"/>
					{ (error) ? <p className="bg-red-500 py-1 flex items-center justify-center text-sm text-white">{ message }</p> : null }

					<button className="py-2 px-6 bg-blue-900 uppercase text-white mt-3"> enviar </button>
				</div>

			</form>

		</div>


	)


}
