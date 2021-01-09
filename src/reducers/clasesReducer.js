const { types } = require("../types/types")


const initialState = {

	totales: 0,

}


export const clasesReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.bonoGetAll:
			return {
				...state,
				totales: action.payload
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
