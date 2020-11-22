import React from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';


// ACCION PARA EL LOGIN
export const startLogin = (email, password) => {

	return async ( dispatch ) => {

		const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
		const body = await resp.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('initial-token', new Date().getTime());
			
			// Accion añadir al store
			dispatch(login({
				uid: body.uid,
				name: body.name
			}))

		} else {
			Swal.fire({
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


export const startRegister = ( user ) => {

	return async (dispatch) => {

		const resp = await fetchWithoutToken('auth/new', user, 'POST');
		const body = await resp.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: body.uid,
				name: body.name
			}))
			
		} else {
			Swal.fire({
				title: 'Error!',
				text: `${body.msg}`,
				icon: 'error',
				confirmButtonText: 'Salir'
			})
		}
		
	}
}	

export const startCheking = () => {

	return async (dispatch) => {
		
		
		const resp = await fetchWithToken( 'auth/renew' );
		const body = await resp.json();

		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: body.uid,
				name: body.name
			}))
			
		} else {
			Swal.fire({
				title: 'Error!',
				text: `${body.msg}`,
				icon: 'error',
				confirmButtonText: 'Salir'
			});

			dispatch( checkingFinish() )
		}

	}

}

const checkingFinish = () => ({
	type: types.authCheckingFinish
})