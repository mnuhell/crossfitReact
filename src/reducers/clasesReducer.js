const { types } = require("../types/types")


const initialState = {

	totales: 0,
	inClass: false
}


export const clasesReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.bonoGetAll:
			return {
				...state,
				totales: action.payload.totales,
				inClass: action.payload.inClass

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
