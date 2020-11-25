import moment from "moment";
import { types } from "../types/types";

const initialState = {

	events: [{
		type: 'Funcional',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		users: [
			{
				_id: '35932653746538650498',
				name: 'Manuel'
			},
			{
				_id: '47865347285634785',
				name: 'Veronica'
			}
		]
	}],
	activeEvent: null
}


export const CalendarReducer = ( state = initialState, action ) => {


	switch (action.type) {

		case types.eventStartLoading:
			return {
				...state,
				events: [...action.payload],
				activeEvent: null
			}
			
	
		default:
			return state;
	}

} 