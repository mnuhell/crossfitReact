const { types } = require("../types/types")


const initialState = {

	totales: 0,
	date: null,
	inClass: false
}


export const clasesReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.bonoGetAll:
			return {
				...state,
				totales: action.payload.totales,
				date: action.payload.date,
				inClass: action.payload.inClass

			}
		case types.classResetDay:
			return {
				...state,
				inClass: false
			}
		case types.classesReset:
			return {
				totales: state
			}

		default: {
			return state
		}
	}

}
