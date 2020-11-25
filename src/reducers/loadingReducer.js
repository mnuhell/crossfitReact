import { types } from "../types/types";





const initialState = {
	active: false
}


export const loadingReducer = ( state = initialState, action) => {


	switch (action.type) {
		case types.loading:
			return {
				
				active: action.payload
			}
	
		default:
			return state;
	}
	
}