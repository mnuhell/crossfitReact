import { types } from "../types/types";


const initialState = {

	name: 'Manuel',
	avatar: 'default_avatar.jpg'

}




export const userReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case types.eventAddUser: 
			return {
				...state
			}

		default:
			return state;
	}
}