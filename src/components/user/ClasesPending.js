import React from 'react';
import { useSelector } from 'react-redux'


export const ClasesPending = () => {

	const clases = useSelector(state => state.clases);

	const withBono = () => {
		return (clases.totales > 0) ? 'bg-green-700' : 'bg-red-700';
	}

	return (

		<div className={`font-body absolute -mt-2 -ml-8 rounded-full h-6 w-6 text-md ${withBono()} text-white flex items-center justify-center`}>
			{clases.totales}
		</div>

	)
}
