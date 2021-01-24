import React from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { getClasesPendingUser } from './events';
import {loading} from "./loading";


export const startLogin = (email, password) => {

	return async ( dispatch ) => {

		const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
		const body = await resp.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('initial-token', new Date().getTime());
			localStorage.setItem('login', 'ok');

			dispatch(login({
				uid: body.uid,
				name: body.name,
				role: body.role,
				bono: body.bono,
				bonos: body.bonos
			}))

			dispatch( getClasesPendingUser() )

		} else {
			await Swal.fire({
				title: 'Error!',
				text: `${body.msg}`,
				icon: 'error',
				confirmButtonText: 'Salir'
			})
		}

	}
}

const login = (user) => ({

	type: types.authLogin,
	payload: user

});

export const startLogout = () => {

	return (dispatch) => {

		localStorage.clear();
		dispatch( logout() )
	}
}

const  logout = () => ( { type: types.authLogout })


export const startRegister = ( user ) => {

	return async (dispatch) => {

		try {

		const resp = await fetchWithoutToken('auth/new', user, 'POST');
		const body = await resp.json();

		if( !body.ok ) {
			return await Swal.fire({
				icon: 'error',
				text: body.msg,
			})
		}

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			localStorage.setItem('login', 'ok');

			await Swal.fire({
				icon: 'success',
				text: body.msg,
			})

			dispatch(login({
				uid: body.uid,
				name: body.name,
				role: body.role,
				bonos: body.bonos
			}))

			dispatch( getClasesPendingUser() )
			dispatch( loading( true))

		}

		} catch ( error ) {
			console.log( error )
		}

	}
}

export const startCheking = () => {

	return async (dispatch) => {

		try {
			const resp = await fetchWithToken( 'auth/renew' );
			const body = await resp.json();

			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(login({
					uid: body.uid,
					name: body.name,
					role: body.role,
					bono: body.bono,
					bonos: body.bonos
				}))

				dispatch( getClasesPendingUser() )
				dispatch( loading( true))

			}

			dispatch( checkingFinish())

		} catch ( error ) {
			console.log( error )
		}

	}

}

export const authForgotPassword = (email) => {

	return async( dispatch ) => {

		try {

			const resp = await fetchWithoutToken('auth/forgot-password', {email}, 'POST');
			const body = await resp.json();

		} catch ( error ) {

			console.log( error )
		}

	}

}


export const authCodeValid = ( code ) => {

	return async(dispatch) => {

		try {

			const resp = await fetchWithoutToken(`auth/valid-code`, {code}, 'POST');
			const body = await resp.json();

			const message = {
				ok: body.ok,
				msg: body.msg,
				userId: body.userId
			}

			if( !body.ok ) {
				dispatch( messageValidCode( message ))
				Swal.fire({
					icon: 'error',
					text: body.msg,
				})
			}

			dispatch( messageValidCode( message ))

		} catch ( error ) {
			console.log( error )
		}

	}
}

const messageValidCode = ( message ) => ({
	type: types.validCodeMessage,
	payload: message
})

const checkingFinish = () => ({
	type: types.authCheckingFinish
})
