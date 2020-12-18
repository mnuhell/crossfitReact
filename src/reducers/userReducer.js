import { types } from "../types/types";


const initialState = {
	users: [
		{
			name: 'Manuel',
			username: 'manufit',
			telefono: '6502690000',
			email: 'm.villagordovera@gmail.com',

			avatar: 'default_avatar.jpg'
		}
	]


}




export const userReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case types.eventAddUser: 
			return {
				...state
			}
		case types.usersGetAll:
			return {
				...state,
				users: [
					...action.payload
				]
			}

		default:
			return state;
	}
}