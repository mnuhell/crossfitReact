import moment from "moment";
import { types } from "../types/types";

const initialState = {

	events: [{
		type: '',
		start: '',
		end: '',
		usersClase: '',
		users: []
	}],
	activeEvent: null
}


export const calendarReducer = ( state = initialState, action ) => {


	switch (action.type) {

		case types.eventStartLoading:
			return {
				...state,
				events: [...action.payload],
			}
		
		case types.eventAddUser: 
			return {
				...state,
				users: [...action.payload]
			}

		case types.eventAddNew:
			return {
				...state,
				events: [
					...state.events,
					action.payload
				]
			}
		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload
			}
			
	
		default:
			return state;
	}

} 