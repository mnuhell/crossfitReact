const { types } = require("../types/types")


const initialState = {

	totales: 0,
	eventUser: []

}


export const clasesReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.bonoGetAll:
			return {
				...state,
				totales: action.payload
			}

		default: {
			return state
		}
	}

}
