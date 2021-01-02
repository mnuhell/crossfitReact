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

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: body.uid,
				name: body.name,
				role: body.role,
				bonos: body.bonos
			}))

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

const checkingFinish = () => ({
	type: types.authCheckingFinish
})
