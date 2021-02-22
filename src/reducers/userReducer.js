import { types } from "../types/types";


const initialState = {

	users: [
		{
			bonos: [],
			name: 'Manuel',
			role: 'user',
			username: 'manufit',
			telefono: '6502690000',
			email: 'm.villagordovera@gmail.com',
			avatar: 'default_avatar.jpg',
			token: null,
			bonoState: 0
		}
	],

	userActive: {
		bonos: [],
		name: 'Manuel',
		role: 'user',
		username: 'manufit',
		telefono: '6502690000',
		email: 'm.villagordovera@gmail.com',
		avatar: 'default_avatar.jpg',
		token: null,
		bonoState: 0
	}

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
		case types.userActive:
			return {
				...state,
				userActive: {
					...action.payload
				}
			}
		case types.userActiveReset:
			return {
				userActive: {}
			}
		case types.userDeleteBono:
			return {
				...state,
				userActive: {
					...action.payload
				}
			}
		case types.classPendingUserAdmin:
			return {
				...state,
					...action.payload
			}

		default:
			return state;
	}
}
